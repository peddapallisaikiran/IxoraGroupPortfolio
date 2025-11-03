import React from 'react';

interface FacilitiesManagementPageProps {
  navigate: (page: string) => void;
}

const FacilitiesManagementPage: React.FC<FacilitiesManagementPageProps> = ({ navigate }) => {

  const principles = [
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1756973306/Untitled_design_4_jjin3g.png",
      alt: "Secure icon",
      highlight: "Secure",
      text: "our customers",
      colors: "bg-red-100 text-red-800"
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046248/Untitled_design_5_cssqqx.png",
      alt: "Honor icon",
      highlight: "Honor",
      text: "our differences",
      colors: "bg-amber-100 text-amber-800"
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046246/Untitled_design_6_wpi8xd.png",
      alt: "Innovate icon",
      highlight: "Innovate",
      text: "for the future",
      colors: "bg-yellow-100 text-yellow-800"
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046245/Untitled_design_7_ndu10o.png",
      alt: "Execute icon",
      highlight: "Execute",
      text: "with quality & velocity",
      colors: "bg-blue-100 text-blue-800"
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046241/Untitled_design_8_eifcm2.png",
      alt: "Lead icon",
      highlight: "Lead",
      text: "with courage & accountability",
      colors: "bg-purple-100 text-purple-800"
    },
    {
      icon: "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757046240/Untitled_design_10_ogkb66.png",
      alt: "Debate icon",
      highlight: "Debate,",
      text: "decide & do",
      colors: "bg-amber-100 text-amber-800"
    }
  ];
  
  const lifeAtIxoraImages = [
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757471182/WhatsApp_Image_2025-09-10_at_07.55.44_5f8dee46_d5slid.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757471179/WhatsApp_Image_2025-09-10_at_07.54.12_34244327_chypov.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470710/679c98877d5849cea38e1f5e_WhatsApp_Image_2025-01-31_at_14.49.22_8904bd82_eves3l.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470710/679c962144f46e55f7662306_WhatsApp_Image_2025-01-31_at_14.49.22_0cc15c36_hgurm6.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1756962910/WhatsApp_Image_2025-09-03_at_18.01.51_fe97c3ea_po4wen.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470718/66ed21480620ecbfa6f7b007_WhatsApp_Image_2024-09-20_at_12.44.22_mxvcjh.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470710/679c97f13ef116e948cdaf24_WhatsApp_Image_2025-01-31_at_14.49.23_c3cc3fa7_rundp5.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470695/6682a28a68090495e03c457f_goa2_vhcglu.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470695/6682a288a26c70cfe59bffbe_program1_lquoz4.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470695/65984127cf1dfd1717e7a919_Charminar1_tch3ln.jpg",
    "https://res.cloudinary.com/ddtw77k8l/image/upload/v1757470695/6682a2885f438e4a6e8aa102_program2_zqgy7e.jpg"
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 md:space-y-12">
      {/* Our Vision Section */}
      <section className="max-w-5xl mx-auto py-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">Our Vision</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our vision is ambitious: a safe, efficient, and sustainable world powered by IxoraGroup and our partners.
        </p>
        <div className="mt-12 mx-auto aspect-video max-w-4xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
          <video
            className="w-full h-full"
            controls
            poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            aria-label="IxoraGroup company vision video"
          >
            {/* The video source will be added later by the user */}
            <source src="#" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Our principles at work Section */}
      <section className="max-w-7xl mx-auto py-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">Our principles at work</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our principles are ingrained in everything we do and every decision we make.
        </p>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={principle.icon} alt={principle.alt} className="h-28 w-28 object-contain mb-4" />
              <p className="font-semibold text-gray-700 leading-snug">
                <span className={`${principle.colors} px-2 py-1 rounded-md`}>{principle.highlight}</span> {principle.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Be part of #LifeAtIxoraGroup Section */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Be part of #LifeAtIxoraGroup
          </h2>
        </div>
        <div className="mt-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {lifeAtIxoraImages.map((src, index) => (
              <div key={index} className="overflow-hidden group">
                <img 
                  src={src} 
                  alt={`Life at IxoraGroup ${index + 1}`} 
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People & Purpose Section */}
      <section className="w-full py-8">
        <div className="relative rounded-3xl overflow-hidden shadow-lg min-h-[350px] flex items-center justify-center p-8">
          <img 
            src="https://res.cloudinary.com/dehglnwgz/image/upload/v1758614192/WhatsApp_Image_2025-09-23_at_12.13.41_PM_rfzh6l.jpg" 
            alt="A person looking thoughtfully towards the future, representing purpose"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center text-white max-w-4xl">
            <h2 className="text-4xl sm:text-5xl font-bold !leading-tight tracking-tight">
              People & Purpose
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/90">
              Learn about our vision and mission, what we mean by 'best' and why our guiding principles underpin everything that we do.
            </p>
            <div className="mt-8">
              <button 
                onClick={() => navigate('vision-mission')}
                className="bg-[#D4B258] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#C3A24B] transition-colors duration-200"
              >
                Vision & Mission
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FacilitiesManagementPage;