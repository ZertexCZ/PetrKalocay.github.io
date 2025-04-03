import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { translations } from '@/data/translations';
import { useLanguage } from '@/contexts/LanguageContext';

const contactFormSchema = z.object({
  name: z.string().min(2, "Jméno musí obsahovat alespoň 2 znaky"),
  email: z.string().email("Zadejte prosím platnou e-mailovou adresu"),
  subject: z.string().min(3, "Předmět musí obsahovat alespoň 3 znaky"),
  message: z.string().min(10, "Zpráva musí obsahovat alespoň 10 znaků")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3e140611-010d-44b3-a77c-cd87d12e0398',
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: (translations as any)[language].messageSent,
          description: (translations as any)[language].messageSent,
        });
        
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: (translations as any)[language].messageError,
        description: (translations as any)[language].messageError,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="min-h-screen relative py-24 px-6 md:px-12 lg:px-16"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="section-heading">
            <h2>
              {(translations as any)[language].contactTitle.split(' ')[0]} {(translations as any)[language].contactTitle.split(' ')[1]} <span className="text-accent">{(translations as any)[language].contactTitle.split(' ')[2]}</span>
            </h2>
            <div></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-300 mb-8">
                {(translations as any)[language].contactDescription}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-accent text-xl mt-1">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{(translations as any)[language].emailContact}</h3>
                    <a href="mailto:petrkalocay@gmail.com" className="text-gray-300 hover:text-accent transition-colors">{(translations as any)[language].emailValue1}</a><br />
                    <a href="mailto:petrkalocay@outlook.cz" className="text-gray-300 hover:text-accent transition-colors">{(translations as any)[language].emailValue2}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-accent text-xl mt-1">
                    <i className="ri-instagram-line"></i>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{(translations as any)[language].instagram}</h3>
                    <a href="https://instagram.com/p.kalocay" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors">{(translations as any)[language].instagramValue}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-accent text-xl mt-1">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{(translations as any)[language].address}</h3>
                    <p className="text-gray-300">{(translations as any)[language].addressValue}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{(translations as any)[language].nameLabel}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={(translations as any)[language].namePlaceholder}
                            {...field}
                            className="w-full p-3 bg-background border border-muted rounded-lg focus:outline-none focus:border-accent transition-colors"
                          />
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
                        <FormLabel>{(translations as any)[language].emailLabel}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={(translations as any)[language].emailPlaceholder}
                            {...field}
                            className="w-full p-3 bg-background border border-muted rounded-lg focus:outline-none focus:border-accent transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{(translations as any)[language].subjectLabel}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={(translations as any)[language].subjectPlaceholder}
                            {...field}
                            className="w-full p-3 bg-background border border-muted rounded-lg focus:outline-none focus:border-accent transition-colors"
                          />
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
                        <FormLabel>{(translations as any)[language].messageLabel}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={(translations as any)[language].messagePlaceholder}
                            rows={5}
                            {...field}
                            className="w-full p-3 bg-background border border-muted rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-accent hover:bg-accent/90 text-black font-medium rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? (translations as any)[language].sendButton : (translations as any)[language].sendButton}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
