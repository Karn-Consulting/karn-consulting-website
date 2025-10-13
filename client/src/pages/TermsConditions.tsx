import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import logoImage from "@assets/image_1760332792562.png";
import Footer from "@/components/Footer";

export default function TermsConditions() {
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
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-6">Effective Date: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services of Karn Consulting, a division of Karn Corporation (GST: 03CLWPK4491C1ZX), 
              you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not 
              access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
            <p>
              Karn Consulting provides AI & ML consulting services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI strategy development and implementation</li>
              <li>Machine learning model development and deployment</li>
              <li>Self-governing intelligent systems design</li>
              <li>Data analytics and business intelligence solutions</li>
              <li>Digital transformation consulting</li>
              <li>Custom AI agent development</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, all content, including but not limited to text, graphics, logos, images, audio clips, 
              digital downloads, data compilations, and software, is the property of Karn Corporation or its content suppliers 
              and is protected by Indian and international copyright laws.
            </p>
            <p className="mt-3">
              Any AI models, algorithms, or custom solutions developed specifically for a client remain the intellectual property 
              as specified in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Client Obligations</h2>
            <p>When engaging our services, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information necessary for service delivery</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt the services or servers</li>
              <li>Provide timely feedback and approvals as required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary information received during the course of 
              the business relationship. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business strategies and plans</li>
              <li>Technical data and algorithms</li>
              <li>Customer information and data</li>
              <li>Financial information</li>
              <li>Trade secrets and know-how</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Payment Terms</h2>
            <p>
              Payment terms are as follows unless otherwise specified in individual agreements:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All fees are quoted in Indian Rupees (INR) unless otherwise specified</li>
              <li>GST and other applicable taxes will be added as per government regulations</li>
              <li>Payment is due within 30 days of invoice date unless otherwise agreed</li>
              <li>Late payments may incur interest at 1.5% per month</li>
              <li>Karn Consulting reserves the right to suspend services for overdue accounts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Karn Consulting shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or 
              any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, or the like that may be transmitted through our services by any third party</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content</li>
            </ul>
            <p className="mt-3">
              In no event shall our total liability exceed the amount paid by you for the specific service giving rise to the claim 
              during the six (6) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Warranties and Disclaimers</h2>
            <p>
              While we strive to provide high-quality services, Karn Consulting services are provided "as is" and "as available" 
              without any warranties of any kind, either express or implied. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Our services will meet all of your requirements</li>
              <li>Our services will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using our services will be accurate or reliable</li>
              <li>Any errors in the services will be corrected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Karn Corporation, Karn Consulting, and their officers, directors, 
              employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including 
              reasonable attorney's fees and costs, arising out of or in any way connected with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to or use of our services</li>
              <li>Your violation of these Terms and Conditions</li>
              <li>Your violation of any third-party rights</li>
              <li>Any misleading or false information provided by you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
            <p>
              Either party may terminate the service agreement with 30 days written notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All outstanding fees become immediately due and payable</li>
              <li>Each party shall return or destroy all confidential information of the other party</li>
              <li>Provisions that by their nature should survive termination shall continue to apply</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes 
              arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in 
              Punjab, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Force Majeure</h2>
            <p>
              Neither party shall be liable for any failure or delay in performing their obligations under these terms if such 
              failure or delay results from circumstances beyond their reasonable control, including but not limited to acts of God, 
              natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, 
              pandemic, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Severability</h2>
            <p>
              If any provision of these Terms and Conditions is held to be invalid or unenforceable, the remaining provisions shall 
              continue in full force and effect. The invalid or unenforceable provision shall be replaced with a valid and enforceable 
              provision that most closely reflects the original intent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Entire Agreement</h2>
            <p>
              These Terms and Conditions, together with any individual service agreements, constitute the entire agreement between 
              you and Karn Consulting regarding the use of our services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">15. Amendments</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. We will notify you of any changes by posting 
              the new Terms and Conditions on our website. Your continued use of our services after such modifications constitutes 
              your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">16. Contact Information</h2>
            <p>For any questions regarding these Terms and Conditions, please contact us at:</p>
            <div className="mt-4 p-4 bg-card/50 rounded-lg border border-primary/10">
              <p><strong>Karn Consulting</strong></p>
              <p>A Division of Karn Corporation</p>
              <p>Registered Office: Kala Ghanupur Sub Urban, House No 8, New Pal Avenue,</p>
              <p>Ram Tirath Road, Amritsar, Punjab, 143001</p>
              <p>Email: support@karnconsulting.co</p>
              <p>Phone: +91-7576956682</p>
              <p>GST Registration Number: 03CLWPK4491C1ZX</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}