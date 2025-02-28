import React from 'react';
import Testimonial from './Testimonial';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Connect helped me find a summer internship through an alumnus who graduated 5 years ago. The platform made it easy to reach out and build a relationship.",
      name: "Sarah Johnson",
      role: "Computer Science Student",
      institution: "Tech University"
    },
    {
      quote: "As a professor, I've seen how Connect bridges the gap between current students and our successful alumni. It's creating opportunities that weren't possible before.",
      name: "Dr. Michael Chen",
      role: "Associate Professor",
      institution: "State College"
    },
    {
      quote: "I love giving back to my alma mater through Connect. I've hired three interns and mentored dozens of students in the past year alone.",
      name: "James Wilson",
      role: "Alumni",
      institution: "Business School"
    }
  ];

  return (
    <div className="py-12 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          What Our Community Says
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              institution={testimonial.institution}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;