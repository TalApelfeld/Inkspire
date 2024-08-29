const callouts = [
  {
    name: "Desk and Office",
    description: "גברים",
    imageSrc: "/assets/men.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "נשים",
    imageSrc: "/assets/women.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "ילדים",
    imageSrc: "/assets/kids.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Example() {
  //   return (
  //     <div className="collections-container">
  //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  //         <div className="mx-auto max-w-2xl  sm:py-24 lg:max-w-none lg:py-32">
  //           <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

  //           <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
  //             {callouts.map((callout) => (
  //               <div key={callout.name} className="group relative">
  //                 <div className="relative h-40 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
  //                   <img
  //                     alt={callout.imageAlt}
  //                     src={callout.imageSrc}
  //                     className="h-full w-full object-cover object-center"
  //                   />
  //                 </div>
  //                 {/* <h3 className="mt-6 text-sm text-gray-500">
  //                   <a href={callout.href}>
  //                     <span className="absolute inset-0" />
  //                     {callout.name}
  //                   </a>
  //                 </h3>
  //                 <p className="text-base font-semibold text-gray-900">
  //                   {callout.description}
  //                 </p> */}
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="collections-container">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-40 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64  hover:border-blue-400 hover:border-4">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-sm text-white filter blur-sm">
                        {callout.name}
                      </h3>
                      <p className="text-base font-semibold text-white">
                        {callout.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
