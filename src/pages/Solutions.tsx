
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Globe, Code, Brain, Database } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary/95 text-white py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PulseSync Solutions</h1>
          <p className="text-xl">Cloud Data Technology Solutions & Intelligent Software Engineering</p>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <Globe className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Cloud Data Technology Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>AWS Cloud migration and optimization</li>
                <li>AWS Data warehousing and storage solutions</li>
                <li>Databases Migration Solutions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Software Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Web and mobile application development</li>
                <li>API integration</li>
                <li>Automation tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Brain className="w-8 h-8 text-primary mb-2" />
              <CardTitle>ML/AI Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Modelling</li>
                <li>Machine learning implementation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Database className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Data & Security Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>ETL pipeline development</li>
                <li>Data security implementation</li>
                <li>Network Security implementation</li>
                <li>Database design and management</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Solutions;
