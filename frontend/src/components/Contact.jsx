import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formspreeEndpoint = 'https://formspree.io/f/mwprayrp';
    setSubmitting(true);
    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (!res.ok) {
        const error = new Error(`Form submission failed with status ${res.status}`);
        error.response = { status: res.status };
        throw error;
      }
      alert(t('contact.toast.description'));
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      if (err?.response?.status === 429) {
        alert('Rate limit reached. Please try again later.');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('contact.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">{t('contact.info')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.email')}</h4>
                    <p className="text-white/80">Ahmed.charfeddine216@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.phone')}</h4>
                    <p className="text-white/80">+216 54 946 860</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.location')}</h4>
                    <p className="text-white/80">Manouba, Tunisia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/5 rounded-lg">
                <p className="text-sm text-white/80">
                  {t('contact.opportunities')}
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">{t('contact.message')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder={t('contact.yourEmail')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder={t('contact.yourMessage')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                  {submitting ? (t('contact.sending') || 'Sending…') : t('contact.send')}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
