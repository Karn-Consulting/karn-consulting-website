import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "react-phone-number-input";

interface LeadFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadFormDialog({ open, onOpenChange }: LeadFormDialogProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateCompanyEmail = (email: string) => {
    const personalDomains = [
      "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", 
      "aol.com", "icloud.com", "mail.com", "protonmail.com",
      "yandex.com", "zoho.com", "gmx.com", "tutanota.com",
      "fastmail.com", "hushmail.com", "rediffmail.com",
      "yahoo.co.in", "gmail.co.in", "outlook.co.in"
    ];
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    
    const domain = email.split("@")[1]?.toLowerCase();
    if (personalDomains.includes(domain)) {
      return "Please enter a company email address";
    }
    
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    
    const emailError = validateCompanyEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    }
    
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Lead form submitted:", formData);
      toast({
        title: "Thank you for your interest!",
        description: "Our team will contact you within 24 hours.",
      });
      
      // Reset form and close dialog
      setFormData({
        name: "",
        companyName: "",
        email: "",
        phone: "",
      });
      setErrors({});
      setIsSubmitting(false);
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-lead-form">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Transform Your Business with AI
          </DialogTitle>
          <DialogDescription>
            Connect with our Self-Governing Intelligence experts today
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setErrors({ ...errors, name: "" });
              }}
              className={errors.name ? "border-destructive" : ""}
              data-testid="input-lead-name"
            />
            {errors.name && (
              <p className="text-sm text-destructive" data-testid="error-name">
                {errors.name}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              placeholder="Acme Corporation"
              value={formData.companyName}
              onChange={(e) => {
                setFormData({ ...formData, companyName: e.target.value });
                setErrors({ ...errors, companyName: "" });
              }}
              className={errors.companyName ? "border-destructive" : ""}
              data-testid="input-lead-company"
            />
            {errors.companyName && (
              <p className="text-sm text-destructive" data-testid="error-company">
                {errors.companyName}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Company Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setErrors({ ...errors, email: "" });
              }}
              className={errors.email ? "border-destructive" : ""}
              data-testid="input-lead-email"
            />
            {errors.email && (
              <p className="text-sm text-destructive" data-testid="error-email">
                {errors.email}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Please use your company email address
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <div className={`phone-input-wrapper ${errors.phone ? "error" : ""}`}>
              <PhoneInput
                id="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(value) => {
                  setFormData({ ...formData, phone: value || "" });
                  setErrors({ ...errors, phone: "" });
                }}
                defaultCountry="IN"
                international
                countryCallingCodeEditable={false}
                data-testid="input-lead-phone"
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-destructive" data-testid="error-phone">
                {errors.phone}
              </p>
            )}
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            data-testid="button-lead-submit"
          >
            {isSubmitting ? "Submitting..." : "Get Started"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}