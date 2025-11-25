import React from 'react';

const TESTIMONIALS = [
  {
    quote: "This isn't feel-good Christianity. It's the kick in the teeth I needed. My marriage is better, my prayer life is real, and I finally feel like a man leading his home.",
    author: "Marcus T.",
    context: "Father of 3, Texas"
  },
  {
    quote: "I've read every Christian men's book out there. This is different. No fluff, no excuses, just the raw truth from Scripture that changed how I approach everything.",
    author: "David R.",
    context: "War Room Member since 2023"
  },
  {
    quote: "The Fourth Answer guide broke something in me - in the best way. I stopped begging God and started possessing the promises. My faith has never been more alive.",
    author: "Jonathan M.",
    context: "Pastor, Ohio"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-stone-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            What Men Are Saying
          </h2>
          <p className="text-stone-500">
            Real transformation from men in the trenches
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-stone-900 border border-stone-800 p-8 rounded-lg"
            >
              <div className="text-amber-500 text-4xl mb-4">&ldquo;</div>
              <p className="text-stone-300 leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-stone-800 pt-4">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-stone-500 text-sm">{testimonial.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
