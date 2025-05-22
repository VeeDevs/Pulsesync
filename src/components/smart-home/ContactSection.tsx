
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    form.reset();
  };

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/27813092938`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img 
          src="/lovable-uploads/2c1fdcef-9b20-474f-81df-7937708f1112.png" 
          alt="PulseSync Logo Background" 
          className="w-full h-full object-contain opacity-10"
        />
      </div>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Ready to transform your home? Contact us today to discuss your smart home needs and receive a personalized consultation.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-8 rounded-xl h-full">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-white dark:bg-gray-800" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} className="bg-white dark:bg-gray-800" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} className="bg-white dark:bg-gray-800" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="resize-none bg-white dark:bg-gray-800" 
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-8 rounded-xl h-full">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-primary">Headquarters</h4>
                    <p className="text-primary/70 mt-1">
                      101 Innovation Drive<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-primary">Phone</h4>
                    <p className="text-primary/70 mt-1">
                      +27 (82) 336-5870<br />
                      +27 (73) 127-1721
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-primary">Email</h4>
                    <p className="text-primary/70 mt-1">
                      info@pulsesync.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-primary">Business Hours</h4>
                    <p className="text-primary/70 mt-1">
                      Monday - Friday: 9AM - 6PM<br />
                      Saturday: 10AM - 4PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <Button 
                  onClick={handleWhatsAppRedirect}
                  className="bg-green-600 hover:bg-green-700 text-white w-full mt-6"
                >
                  Chat with us on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
