import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import logoImage from "@assets/image_1760332792562.png";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <img 
              src={logoImage} 
              alt="Karn Consulting" 
              className="h-12 cursor-pointer"
              onClick={() => setLocation("/")}
            />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setLocation("/")}
              data-testid="button-back"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-12 md:py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Effective Date: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              Karn Consulting ("we," "our," or "us"), a division of Karn Corporation, is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our AI & ML consulting services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us through our website forms</li>
              <li>Subscribe to our newsletters or updates</li>
              <li>Request information about our services</li>
              <li>Engage with our AI/ML consulting services</li>
            </ul>
            <p className="mt-3">This information may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and job title</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name and address</li>
              <li>Project requirements and business information</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect certain information about your device, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Access times and dates</li>
              <li>Pages viewed and navigation patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our AI/ML consulting services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Communicate about new services, features, or opportunities</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <div className="space-y-3 mt-4">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-1">Service Providers</h4>
                <p className="pl-4">With trusted third-party vendors who assist us in operating our website and conducting our business</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-1">Legal Requirements</h4>
                <p className="pl-4">When required by law or to respond to legal process</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-1">Business Transfers</h4>
                <p className="pl-4">In connection with a merger, acquisition, or sale of assets</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-1">Consent</h4>
                <p className="pl-4">With your explicit consent for any other purpose</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, 
              secure data transmission protocols, and regular security assessments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, 
              comply with legal obligations, resolve disputes, and enforce our agreements. When your information is no longer required, 
              we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <div className="space-y-3 mt-4">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-1">Access</h4>
                <p className="pl-4">Request access to your personal information</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-1">Correction</h4>
                <p className="pl-4">Request correction of inaccurate information</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-1">Deletion</h4>
                <p className="pl-4">Request deletion of your information</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-1">Portability</h4>
                <p className="pl-4">Request transfer of your information</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-1">Opt-out</h4>
                <p className="pl-4">Opt-out of marketing communications</p>
              </div>
            </div>
            <p className="mt-4">
              To exercise these rights, please contact us at support@karnconsulting.co
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
              do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on computers located outside of your state, province, country, 
              or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in 
              place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
              from children under 18. If we become aware that we have collected personal information from a child under 18, we 
              will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
              Policy on this page and updating the "Effective Date" at the top of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <div className="mt-4 p-4 bg-card/50 rounded-lg border border-primary/10">
              <p><strong>Karn Consulting</strong></p>
              <p>A Division of Karn Corporation</p>
              <p>Email: support@karnconsulting.co</p>
              <p>Phone: +91-7576956682</p>
              <p>GST Registration: 03CLWPK4491C1ZX</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}