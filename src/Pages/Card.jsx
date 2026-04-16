const systems = [
  {
    name: "CCTV SYSTEM AMC",
    withoutMaterial: [
      { item: "HD Camera", price: "₹750 – ₹1500" },
      { item: "IP Camera", price: "₹900 – ₹1800" },
      { item: "DVR/NVR", price: "₹1200 – ₹1600" },
      { item: "HDD", price: "₹400 – ₹1800" },
    ],
    withoutMaterialIncludes: [
      "Service visit at branch",
      "Camera cleaning",
      "Camera & DVR/NVR setting/configuration",
      "Minor troubleshooting",
      "❌ Spare parts not included",
    ],
    withMaterial: [
      { item: "HD Camera", price: "₹1500 – ₹2100" },
      { item: "IP Camera", price: "₹1900 – ₹2800" },
      { item: "DVR/NVR", price: "₹2000 – ₹2900" },
      { item: "HDD", price: "₹1100 – ₹2100" },
    ],
    withMaterialIncludes: [
      "All services in Without Material",
      "Parts replacement included (Camera, DVR/NVR, HDD)",
      "Camera fault → replaced immediately",
      "Power issue → replaced immediately",
      "HDD failure → replaced immediately",
    ],
  },
  { name: "FIRE ALARM SYSTEM" },
  { name: "INTRUSION ALARM (PIR / DOOR SENSOR)" },
  { name: "ACCESS CONTROL / BIOMETRIC" },
  { name: "NETWORK + POWER" },
  { name: "FINAL BRANCH AMC" },
];

function CCTVSection({ system }) {
  return (
    <section className="bg-white/70 backdrop-blur-md py-12 rounded-2xl shadow-lg border border-white/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          {system.name}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Without Material */}
          <div>
            <p className="text-green-600 font-bold text-xl mb-4">
              🟢 Without Material
            </p>
            <ul className="mb-4">
              {system.withoutMaterial.map((item, idx) => (
                <li key={idx} className="flex justify-between mb-2">
                  <span>{item.item}</span>
                  <span className="font-medium">{item.price}</span>
                </li>
              ))}
            </ul>

            <ul className="list-disc pl-6 text-gray-600 text-sm">
              {system.withoutMaterialIncludes.map((inc, idx) => (
                <li key={idx}>{inc}</li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden md:block border-l border-gray-300 absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>

          {/* With Material */}
          <div>
            <p className="text-red-500 font-bold text-xl mb-4">
              🔴 With Material
            </p>
            <ul className="mb-4">
              {system.withMaterial.map((item, idx) => (
                <li key={idx} className="flex justify-between mb-2">
                  <span>{item.item}</span>
                  <span className="font-medium">{item.price}</span>
                </li>
              ))}
            </ul>

            <ul className="list-disc pl-6 text-gray-600 text-sm">
              {system.withMaterialIncludes.map((inc, idx) => (
                <li key={idx}>{inc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const cctv = systems.find((s) => s.name === "CCTV SYSTEM AMC");
  const otherSystems = systems.filter(
    (s) => s.name !== "CCTV SYSTEM AMC"
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-16">

      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
          AMC Service Plans
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Complete service details for CCTV. For other systems, please contact us.
        </p>

        {/* CCTV Section */}
        <CCTVSection system={cctv} />

        {/* Other Systems Section */}
<section className="bg-white py-12 mt-12">
  <div className="max-w-6xl mx-auto px-4">

    {/* Heading */}
    <h2 className="text-3xl font-bold mb-6 text-gray-800">
      Other AMC Systems
    </h2>

    {/* Simple List (same feel as CCTV items) */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {otherSystems.map((sys, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 bg-gray-50"
        >
          <span className="text-gray-700">{sys.name}</span>
        </div>
      ))}
    </div>

    {/* Contact Box (clean like includes section) */}
    <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-gray-700 text-center md:text-left">
        For pricing and detailed AMC plans, please contact us.
      </p>

      <a
        href="tel:+918200572237"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        📞 Contact Us
      </a>

    </div>

  </div>
</section>
      </div>
    </div>
  );
}