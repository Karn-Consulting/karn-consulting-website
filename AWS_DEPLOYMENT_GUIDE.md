# AWS Deployment Guide for Karn Consulting Website

## ✅ Your Lead Capture System is Ready!

Your website now has a **fully functional lead capture system** that:
- Saves all leads to a PostgreSQL database
- Sends you real-time notifications (visible in server logs)
- Provides an admin dashboard at `/admin/leads`
- Exports leads to CSV for analysis

**Access your leads at:** `http://localhost:5000/admin/leads`

## 🚀 Deploy to AWS EC2 (Step-by-Step Guide)

### Prerequisites
- AWS Account
- Your custom domain configured in Route 53 or your DNS provider
- SSH key pair for EC2 access

### Step 1: Launch EC2 Instance

1. **Login to AWS Console** → EC2 → Launch Instance
2. **Configure Instance:**
   - Name: `karn-consulting-website`
   - OS: Ubuntu 22.04 LTS
   - Instance Type: t3.small (or t3.micro for testing)
   - Key pair: Create new or use existing
   - Security Group:
     - SSH (22) - Your IP
     - HTTP (80) - Anywhere
     - HTTPS (443) - Anywhere
     - Custom TCP (5000) - Anywhere (temporary for testing)

### Step 2: Connect & Setup Server

```bash
# Connect to your instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install git, nginx, and PM2
sudo apt install -y git nginx
sudo npm install -g pm2

# Clone your repository
git clone https://github.com/your-username/karn-consulting.git
cd karn-consulting

# Install dependencies
npm install
```

### Step 3: Setup PostgreSQL Database

**Option A: Use Amazon RDS (Recommended)**
1. Create RDS PostgreSQL instance
2. Note the connection string
3. Update DATABASE_URL in your environment

**Option B: Install PostgreSQL on EC2**
```bash
sudo apt install postgresql postgresql-contrib
sudo -u postgres psql
CREATE DATABASE karn_consulting;
CREATE USER karn_user WITH PASSWORD 'your-secure-password';
GRANT ALL PRIVILEGES ON DATABASE karn_consulting TO karn_user;
\q
```

### Step 4: Configure Environment Variables

```bash
# Create environment file
nano .env

# Add these variables:
DATABASE_URL=postgresql://user:password@localhost:5432/karn_consulting
SESSION_SECRET=your-random-secret-here
NODE_ENV=production
```

### Step 5: Build & Run Application

```bash
# Build the frontend
npm run build

# Start with PM2
pm2 start server/index.ts --name karn-consulting
pm2 save
pm2 startup
```

### Step 6: Configure Nginx as Reverse Proxy

```bash
sudo nano /etc/nginx/sites-available/karn-consulting
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/karn-consulting /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 7: Setup SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Step 8: Configure Domain DNS

In your domain registrar or Route 53:
- A Record: `@` → Your EC2 IP
- A Record: `www` → Your EC2 IP

## 📧 Optional: Email Notifications for Leads

To get email notifications when someone submits a lead:

### Using Amazon SES:
1. Verify your email in SES
2. Install nodemailer: `npm install nodemailer`
3. Add to your lead submission code:

```javascript
// In server/routes.ts after saving lead
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'email-smtp.us-east-1.amazonaws.com',
  port: 587,
  auth: {
    user: 'YOUR_SES_SMTP_USERNAME',
    pass: 'YOUR_SES_SMTP_PASSWORD'
  }
});

// Send notification
await transporter.sendMail({
  from: 'noreply@karnconsulting.co',
  to: 'support@karnconsulting.co',
  subject: 'New Lead Captured!',
  html: `
    <h2>New Lead Details:</h2>
    <p><strong>Name:</strong> ${lead.name}</p>
    <p><strong>Company:</strong> ${lead.companyName}</p>
    <p><strong>Email:</strong> ${lead.email}</p>
    <p><strong>Phone:</strong> ${lead.phone}</p>
  `
});
```

## 🔒 Security Checklist

- [ ] Change default passwords
- [ ] Enable UFW firewall
- [ ] Setup fail2ban
- [ ] Regular security updates
- [ ] Backup database regularly
- [ ] Monitor server logs
- [ ] Setup CloudWatch monitoring

## 🎯 Alternative Deployment Options

### 1. **AWS Amplify** (Easiest)
- Push to GitHub
- Connect Amplify to repo
- Auto-deploys on push
- Built-in SSL & CDN

### 2. **AWS Elastic Beanstalk**
- Package as zip
- Upload to Beanstalk
- Managed scaling
- Load balancing included

### 3. **Docker on ECS**
- Create Dockerfile
- Push to ECR
- Deploy on ECS Fargate
- Serverless container hosting

## 📝 Important Notes

1. **Never share AWS credentials** - Always deploy yourself
2. **Database Backup** - Set up automated backups
3. **Monitoring** - Use CloudWatch for alerts
4. **Scaling** - Consider Auto Scaling Groups for high traffic
5. **CDN** - Use CloudFront for static assets

## 🆘 Troubleshooting

**Issue: Database connection fails**
- Check DATABASE_URL format
- Verify security groups allow connection
- Check PostgreSQL is running

**Issue: Site not accessible**
- Check Nginx is running: `sudo systemctl status nginx`
- Check PM2 process: `pm2 status`
- Review logs: `pm2 logs karn-consulting`

**Issue: SSL not working**
- Ensure domain DNS is pointed correctly
- Wait for DNS propagation (up to 48 hours)
- Check Certbot renewal: `sudo certbot renew --dry-run`

## 📊 Monitoring Your Leads

Access your lead management dashboard at:
`https://your-domain.com/admin/leads`

Features:
- View all captured leads
- Export to CSV
- Real-time updates
- Email/phone click-to-contact

## 🚀 You're Ready!

Your website is production-ready with:
- ✅ Professional design
- ✅ Lead capture system
- ✅ Database storage
- ✅ Admin dashboard
- ✅ Contact functionality

Follow this guide to deploy on AWS, or use any hosting platform of your choice!

---
*For additional support, contact your development team*