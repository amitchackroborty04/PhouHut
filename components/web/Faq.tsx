import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "Are the phones at PhoneHut brand new or refurbished?",
    answer: "We primarily sell brand-new, factory-sealed devices. However, we do have a dedicated 'Certified Pre-Owned' section where every phone undergoes a 50-point quality check and comes with a 6-month PhoneHut warranty."
  },
  {
    question: "What is your return policy if I don't like my new phone?",
    answer: "We offer a 14-day 'No Questions Asked' return policy for all devices. As long as the phone is in its original condition with all accessories and packaging, you can return it for a full refund or exchange."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes! PhoneHut ships to over 50 countries. Shipping costs and delivery times vary by location, but most international orders arrive within 7-10 business days."
  },
  {
    question: "Can I trade in my old phone for a discount on a new one?",
    answer: "Absolutely. Our 'Trade-In & Upgrade' program allows you to bring in your old device (any brand) and get an instant credit towards your next purchase at PhoneHut."
  },
  {
    question: "How do I track my order status?",
    answer: "Once your order is shipped, you will receive an email with a tracking number. You can also log into your PhoneHut account and click on 'Order History' to see real-time updates."
  }
];

export function FaqSection() {
  return (
    <section className="py-20  px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#FF6900] mb-4">Frequently Asked Questions</h2>
        <p className="text-white font-normal text-base">Everything you need to know about shopping at PhoneHut.</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
            <AccordionTrigger className="text-left font-medium text-2xl text-white hover:text-[#FF6900] hover:no-underline py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-xl leading-relaxed pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}