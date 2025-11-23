export interface FAQItem {
  key: string;
  categories: FAQCategory[];
  question: string;
  answer: React.ReactNode;
}

export enum FAQCategory {
  ServiceAndProcess = 'service-and-process',
  MaterialsAndCustomization = 'materials-and-customization',
  CareAndMaintenance = 'care-and-maintenance',
}

export const FAQCategoryLabels = {
  [FAQCategory.ServiceAndProcess]: 'Service & Process',
  [FAQCategory.MaterialsAndCustomization]: 'Materials & Customisation',
  [FAQCategory.CareAndMaintenance]: 'Care & Maintenance',
};

export const faqs: FAQItem[] = [
  {
    key: 'car-interior-services',
    categories: [FAQCategory.ServiceAndProcess],
    question: 'What car interior services do you provide?',
    answer: (
      <div className="space-y-2">
        <p>
          We handle everything inside your ride. Other than just car seat upholstery, our services
          also include:
        </p>
        <ul className="list-disc pl-4">
          <li>Roof lining rewraps</li>
          <li>Dashboard and door panel rewraps</li>
          <li>Steering wheel, gear knob and shift boot rewraps</li>
        </ul>
        <p>
          Our specialty lies in customisation — offering premium materials, bespoke stitching,
          colour combinations and design patterns to match your car’s unique personality.
        </p>
      </div>
    ),
  },
  {
    key: 'rewrap-any-car-seats',
    categories: [FAQCategory.ServiceAndProcess],
    question: 'Can you rewrap any car seats and all interior parts?',
    answer: (
      <p>
        Absolutely, we can rewrap any car seat. As for other interior parts, it depends. Some
        components, like plastic handles or casings, aren’t meant to be wrapped and we don’t believe
        in forcing what doesn’t fit. Our rule of thumb? If it came wrapped in leather or PVC, we can
        rewrap it and make it look factory-fitted or better.
      </p>
    ),
  },
  {
    key: 'rewrap-process',
    categories: [FAQCategory.ServiceAndProcess],
    question: 'What’s the rewrap process like? How long does it take?',
    answer: (
      <div className="space-y-2">
        <p>It’s straightforward and built around your convenience:</p>
        <ol className="list-decimal pl-4">
          <li>
            <span className="font-bold">Consultation & Design Selection</span> – Choose your
            materials, stitching, and design. We’ll guide you through every detail.
          </li>
          <li>
            <span className="font-bold">Order Confirmation</span> – Once confirmed, your custom seat
            covers go into production.
          </li>
          <li>
            <span className="font-bold">Installation</span> – When your covers arrive, drop off your
            car and let our team work their magic.
          </li>
        </ol>
        <p>
          We move fast — installation for most standard models takes less than a day, so you’ll get
          your ride back before you even miss it. And what if you’re too busy to visit? We also
          offer virtual consultations via WhatsApp/calls so you can finalise your design anytime,
          anywhere.
        </p>
      </div>
    ),
  },
  {
    key: 'deposit-and-payment-modes',
    categories: [FAQCategory.ServiceAndProcess],
    question: 'Is a deposit required? What are the payment modes?',
    answer: (
      <div className="space-y-2">
        <p>
          Yes, a deposit is required to lock in your installation booking and materials. We accept
          PayNow, bank transfer and cash for your convenience.
        </p>
        <p>
          Prefer flexible payments? We’ve got you covered with Atome and Grab PayLater, available
          with a small transaction fee.
        </p>
      </div>
    ),
  },
  {
    key: 'warranty-coverage',
    categories: [FAQCategory.ServiceAndProcess],
    question: 'Do your services come with warranty coverage?',
    answer: (
      <p>
        Definitely. All our seat rewraps come with a 1-year warranty covering any workmanship
        defects — because we stand by our craft.
      </p>
    ),
  },
  {
    key: 'price-range-for-car-seat-leather-rewrap',
    categories: [FAQCategory.ServiceAndProcess],
    question: 'What’s the price range for car seat leather rewrap?',
    answer: (
      <div className="space-y-2">
        <p>
          Our leather sets are competitively priced for top-notch craftsmanship. Final pricing
          depends on your car model, seat configuration and material choice. The complexity of your
          car model is a major factor — the more intricate the job, the more labour intensive it is
          which leads to higher cost.
        </p>
        <p>
          For an accurate quote, give us a call or drop us a WhatsApp text. We can also tailor a
          package price based on the items you want done.
        </p>
        <p>
          Want a sense of the prices? Check out our{' '}
          <a
            href="https://www.carousell.sg/u/fivestarautoleather/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-600 underline hover:text-gray-900"
          >
            Carousell Listings
          </a>{' '}
          to see different car seat transformations and options.
        </p>
      </div>
    ),
  },
  {
    key: 'repair-instead-of-rewrap',
    categories: [FAQCategory.ServiceAndProcess],
    question: 'Can you do repair instead of rewrap for minor damages?',
    answer: (
      <div className="space-y-2">
        <p>
          Yes, minor damage can usually be repaired, especially if it is localised to a high-touch
          area like the driver’s seat side bolster. But if the wear and tear is extensive or spread
          out, we would recommend a full rewrap to bring back a clean, uniform look and lasting
          durability.
        </p>
        <p>
          📸 Want to see how we do it? Check out our{' '}
          <a
            href="https://www.facebook.com/share/p/1BzqKXRKPR/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-600 underline hover:text-gray-900"
          >
            Leather Repair FB Post
          </a>{' '}
          for an illustration of our repair process.
        </p>
      </div>
    ),
  },
  {
    key: 'steering-wheel-rewrap',
    categories: [FAQCategory.ServiceAndProcess],
    question:
      'For steering wheel rewrap, do you strip the old leather or do you do an overlay on top?',
    answer: (
      <p>
        We typically remove the original steering leather to achieve that clean, factory-fitted
        finish. However, an overlay rewrap is also possible for steering wheels with damaged cores
        or for those who prefer a slightly thicker, sportier grip.
      </p>
    ),
  },
  {
    key: 'roof-lining-sag',
    categories: [FAQCategory.ServiceAndProcess],
    question: 'Why do roof linings sag? Is rewrap the only solution?',
    answer: (
      <div className="space-y-2">
        <p>
          Roof linings consist of two layers: a fabric surface and a foam backing underneath. Over
          time, Singapore’s heat and humidity cause the foam to deteriorate, leading the fabric to
          detach and sag.
        </p>
        <p>
          Once the foam disintegrates, adhesives can no longer hold thus making spot repairs
          ineffective. The proper fix involves stripping, cleaning and rewrapping the entire lining
          board with new roof lining fabric.
        </p>
        <p>
          🎥 Curious how it’s done? Watch us in action in this{' '}
          <a
            href="https://www.facebook.com/share/r/1MgUMwD8oQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-600 underline hover:text-gray-900"
          >
            Roof Lining Rewrap FB Reel
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    key: 'materials-options',
    categories: [FAQCategory.MaterialsAndCustomization],
    question: 'What materials options do you offer?',
    answer: (
      <div className="space-y-2">
        <p>
          We specialise exclusively in automotive-grade vegan{' '}
          <span className="font-bold">microfiber leather</span> — a next-generation material that
          delivers the same premium look and feel as cowhide, minus the cruelty, maintenance hassles
          and environmental footprint.
        </p>
        <p>
          Crafted from ultra-fine fibers that replicate the structure of natural leather, it feels
          soft and supple to the touch. Engineered for modern car interiors, our microfiber leather
          is UV-resistant, scratch-resistant and easy to clean. Our collection comes in two
          finishes:
        </p>
        <ul className="list-disc pl-4">
          <li>
            <span className="font-bold">Standard Full Grain</span> – for a more textured, natural
            feel
          </li>
          <li>
            <span className="font-bold">Premium Smooth Grain</span> – for a sleek, soft and luxe
            finish
          </li>
        </ul>
        <p>
          To complement your interior, we also carry other premium vegan materials such as Alcantara
          for seats and velvet fabric for roof linings.
        </p>
        <p>
          For commercial or rental vehicles, we offer a durable and cost-effective PVC option that’s
          thicker than standard market versions, measuring 1.1mm for enhanced strength.
        </p>
        <p>
          ✏️ Want to dive deeper? Check out our blog post{' '}
          <a
            href="https://www.fivestarautoleather.com/blog/types-of-car-leather"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-600 underline hover:text-gray-900"
          >
            “3 Types of Car Leather and How to Identify Them”
          </a>{' '}
          for a more in-depth read.
        </p>
      </div>
    ),
  },
  {
    key: 'difference-between-half-leather-and-full-leather',
    categories: [FAQCategory.MaterialsAndCustomization],
    question: 'What’s the difference between half leather & full leather?',
    answer: (
      <div className="space-y-2">
        <p>
          Half leather means that the front of the seat (main contact areas) is in microfiber
          leather, while the sides and back of the seat is in a matching PVC. Full leather means
          that the whole seat is done in microfiber leather.
        </p>
        <p>
          ✏️ More on this in our blog post{' '}
          <a
            href="https://www.fivestarautoleather.com/blog/guide-to-car-leather-upholstery"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-600 underline hover:text-gray-900"
          >
            “A Guide to Car Leather Upholstery in Singapore”
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    key: 'design-elements-can-i-customise-for-my-car',
    categories: [FAQCategory.MaterialsAndCustomization],
    question: 'What design elements can I customise for my car?',
    answer: (
      <div className="space-y-2">
        <p>You can personalise your interior with:</p>
        <ul className="list-disc pl-4">
          <li>
            Material type (such as textured vs. smooth grain, fabric alternatives like Alcantara)
          </li>
          <li>Colour combinations</li>
          <li>Leather trim details such as piping</li>
          <li>Stitching colour & pattern</li>
          <li>Embroidered logo or branding</li>
        </ul>
        <p>
          Google is your best friend for design inspiration but do remember to keep your seat’s
          original contours in mind as they can’t be changed. The smartest designs work{' '}
          <span className="italic">with</span> your car’s curves, not against them.
        </p>
      </div>
    ),
  },
  {
    key: 'durability-of-your-leather',
    categories: [FAQCategory.MaterialsAndCustomization],
    question: 'How durable is your leather? Is it scratch resistant & pet friendly?',
    answer: (
      <div className="space-y-2">
        <p>
          Our leathers are automotive-grade, UV-resistant and wear-tested for long-lasting
          performance even under Singapore’s climate. It is scratch resistant and pet friendly,
          especially when it comes to wet messes. We do however, recommend using a pet mat on top of
          the seats for even easier upkeep and to extend your leather's lifespan.
        </p>
        <p>
          🎥 See how tough our leather really is in our{' '}
          <a
            href="https://www.facebook.com/reel/1269788776699954"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-600 underline hover:text-gray-900"
          >
            Stress Test Reel
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    key: 'does-your-leather-get-hot',
    categories: [FAQCategory.MaterialsAndCustomization],
    question: 'Does your leather get hot?',
    answer: (
      <div className="space-y-2">
        <p>
          Our microfiber leather is UV-resistant and heat-treated to reduce heat absorption. It
          retains less heat than PVC, and a perforated option is also available for better
          breathability.
        </p>
        <p>
          But truth be told, any leather material will still feel warm under direct sunlight. We’re
          in the midst of developing a new fabric material with our suppliers that is
          stain-resistant, easy to clean and built to combat our tropical climate. Stay tuned!
        </p>
      </div>
    ),
  },
  {
    key: 'are-fabric-alternatives-like-alcantara-a-better-choice',
    categories: [FAQCategory.MaterialsAndCustomization],
    question: 'Are fabric alternatives like Alcantara a better choice?',
    answer: (
      <p>
        Alcantara and suede-style fabrics definitely feel less hot under direct sunlight and give a
        sporty vibe. However, they require more upkeep and genuine Alcantara doesn’t come cheap.
        Leather, on the other hand, is easier to clean, more resistant to spills and offers that
        timeless premium look. Ultimately, it depends on your lifestyle and preference.
      </p>
    ),
  },
  {
    key: 'how-do-i-care-for-and-maintain-my-new-leather-seats',
    categories: [FAQCategory.CareAndMaintenance],
    question: 'How do I care for & maintain my new leather seats?',
    answer: (
      <div className="space-y-2">
        <p>
          Avoid harsh chemicals when cleaning your leather seats. Our leather is 100% man-made and
          vegan so there’s no need for any conditioners or oils.
        </p>
        <p>
          For regular maintenance, simply wipe down with clear water using a soft, non-abrasive
          cloth. For tougher stains, use a mild detergent like hand soap or dishwashing liquid
          diluted with water. After cleaning, leave your car ventilated so the seats don’t stay
          damp.
        </p>
        <p>
          <span className="font-bold">Important!</span> Always remember to test any solution on a
          hidden or less obvious area first
        </p>
      </div>
    ),
  },
  {
    key: 'what-can-i-do-if-i-accidentally-cut-stained-or-damaged-my-new-leather',
    categories: [FAQCategory.CareAndMaintenance],
    question: 'What can I do if I accidentally cut, stained or damaged my new leather?',
    answer: (
      <div className="space-y-2">
        <p>
          First, don’t panic — accidents do happen. Send us a few clear photos and we’ll see what
          magic we can do. If the damage is irreversible, we can do repair and replace the damaged
          section with a new piece of leather at a small nominal cost. Don’t worry, there’s no need
          to rewrap the entire car again.
        </p>
        <p>
          📸 Want to see how we do repair? Check out our{' '}
          <a
            href="https://www.facebook.com/share/p/1BzqKXRKPR/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-600 underline hover:text-gray-900"
          >
            Leather Repair FB Post
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    key: 'how-can-i-protect-my-car-interior-from-heat-and-uv-damage',
    categories: [FAQCategory.CareAndMaintenance],
    question: 'How can I protect my car interior from heat and UV damage?',
    answer: (
      <div className="space-y-2">
        <p>
          Singapore’s sun and heat are relentless. Prolonged sun exposure will damage even our
          UV-resistant leather, and high temperatures can warp plastic components.
        </p>
        <p>
          The best defence is parking in sheltered or shaded carparks but we know that’s not always
          realistic. Tinted window film helps reduce interior heat, and a reflective windshield
          protector can make a noticeable difference despite only shielding the front of the car.
        </p>
      </div>
    ),
  },
  {
    key: 'do-you-offer-aftercare-or-maintenance-services',
    categories: [FAQCategory.CareAndMaintenance],
    question: 'Do you offer aftercare or maintenance services?',
    answer: (
      <p>
        Post installation, we do quality checks and a thorough cleaning of seats to ensure
        everything’s perfect before it leaves our hands. We don’t offer ongoing aftercare, but we
        have trusted business partners proficient in leather cleaning and car interior maintenance.
        Hit us up if you would like a recommendation.
      </p>
    ),
  },
];
