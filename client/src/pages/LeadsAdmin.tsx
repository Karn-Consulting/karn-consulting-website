import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, RefreshCcw, Users, Mail, Phone, Building } from "lucide-react";
import { format } from "date-fns";
import type { Lead } from "@shared/schema";
import { useState } from "react";

export default function LeadsAdmin() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["/api/leads"],
    refetchInterval: 30000, // Auto refresh every 30 seconds
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const handleExport = () => {
    if (!data?.leads) return;
    
    // Convert to CSV
    const headers = ["Name", "Company", "Email", "Phone", "Date Submitted"];
    const rows = data.leads.map((lead: Lead) => [
      lead.name,
      lead.companyName,
      lead.email,
      lead.phone,
      format(new Date(lead.createdAt), "yyyy-MM-dd HH:mm:ss")
    ]);
    
    const csv = [
      headers.join(","),
      ...rows.map((row: string[]) => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");
    
    // Download CSV
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-card/30 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="text-center space-y-4">
              <RefreshCcw className="w-8 h-8 text-primary mx-auto animate-spin" />
              <p className="text-muted-foreground">Loading leads...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-card/30 p-8">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 text-center border-destructive/20">
            <p className="text-destructive">Failed to load leads</p>
            <Button onClick={() => refetch()} className="mt-4">
              Try Again
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const leads = data?.leads || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card/30 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Lead Management
            </h1>
            <p className="text-muted-foreground">
              View and manage all captured leads
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={isRefreshing}
              data-testid="button-refresh-leads"
            >
              <RefreshCcw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button
              onClick={handleExport}
              disabled={leads.length === 0}
              data-testid="button-export-leads"
            >
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-6 border-primary/10">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Leads</p>
              <p className="text-3xl font-bold text-primary">{leads.length}</p>
            </div>
          </Card>
          
          <Card className="p-6 border-primary/10">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">This Week</p>
              <p className="text-3xl font-bold">
                {leads.filter((lead: Lead) => {
                  const date = new Date(lead.createdAt);
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return date > weekAgo;
                }).length}
              </p>
            </div>
          </Card>
          
          <Card className="p-6 border-primary/10">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Today</p>
              <p className="text-3xl font-bold">
                {leads.filter((lead: Lead) => {
                  const date = new Date(lead.createdAt);
                  const today = new Date();
                  return date.toDateString() === today.toDateString();
                }).length}
              </p>
            </div>
          </Card>
          
          <Card className="p-6 border-primary/10">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
              <p className="text-3xl font-bold text-chart-2">--</p>
            </div>
          </Card>
        </div>

        {/* Leads Table */}
        {leads.length === 0 ? (
          <Card className="p-12 text-center border-primary/10">
            <Users className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No leads yet</h2>
            <p className="text-muted-foreground">
              Leads will appear here once visitors submit the contact form
            </p>
          </Card>
        ) : (
          <Card className="border-primary/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-card/50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium">#</th>
                    <th className="text-left p-4 font-medium">Name</th>
                    <th className="text-left p-4 font-medium">Company</th>
                    <th className="text-left p-4 font-medium">Email</th>
                    <th className="text-left p-4 font-medium">Phone</th>
                    <th className="text-left p-4 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead: Lead, index: number) => (
                    <tr 
                      key={lead.id} 
                      className="border-b hover:bg-card/30 transition-colors"
                      data-testid={`lead-row-${index}`}
                    >
                      <td className="p-4 text-muted-foreground">
                        {index + 1}
                      </td>
                      <td className="p-4 font-medium">
                        {lead.name}
                      </td>
                      <td className="p-4 flex items-center gap-2">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        {lead.companyName}
                      </td>
                      <td className="p-4">
                        <a 
                          href={`mailto:${lead.email}`}
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {lead.email}
                        </a>
                      </td>
                      <td className="p-4">
                        <a 
                          href={`tel:${lead.phone}`}
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {lead.phone}
                        </a>
                      </td>
                      <td className="p-4 text-muted-foreground">
                        <div>
                          <p className="text-sm">
                            {format(new Date(lead.createdAt), "MMM dd, yyyy")}
                          </p>
                          <p className="text-xs">
                            {format(new Date(lead.createdAt), "HH:mm:ss")}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}