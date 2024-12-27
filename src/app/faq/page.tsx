 'use client'
 
 import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function FAQSection() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const faqData = [
    {
      id: 1,
      question: "What types of chairs do you offer?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      id: 2,
      question: "How can we get in touch with you?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      id: 3,
      question: "Do your chairs come with a warranty?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      id: 4,
      question: "What will be delivered? And When?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      id: 5,
      question: "Can I try a chair before purchasing?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    },
    {
      id: 6,
      question: "How do I clean and maintain my Comforty chair?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
    }
  ];

  const toggleQuestion = (id: number) => {
    setOpenQuestions(prev => 
      prev.includes(id) 
        ? prev.filter(qId => qId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl md:w-[950px]  md:h-[750px] mx-auto px-4 py-12 md:py-16  ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions Looks Here</h2>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid md:grid-cols-2  gap-6">
        {faqData.map((faq) => (
          <div 
            key={faq.id}
            className="  rounded-lg overflow-hidden"
          >
            <button onClick={() => toggleQuestion(faq.id)}
              className="w-full  flex-col md:h-[120px] items-center gap-2 justify-between bg-[#F7F7F7] p-4 text-left " >
                  <div className='flex justify-between md:w-[410px] '>
              <span className="font-medium text-left text-gray-900">{faq.question}</span>
              <Plus className={`w-5 h-5 text-gray-500 transition-transform ${
                  openQuestions.includes(faq.id) ? 'rotate-45' : ''}`} />
             </div>
             <div>
             <span className="text-xs text-left text-gray-900">{faq.answer}</span>
             </div>
            </button>
             
            {openQuestions.includes(faq.id) && (
              <div className="px-4 pb-4">
                <p className=" text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}