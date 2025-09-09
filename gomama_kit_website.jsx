export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-200 via-pink-100 to-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">GoMama Kit</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          The smart, stylish, and compact diaper bag every mom needs.
        </p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-pink-600 transition">
          Shop Now
        </button>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Signature Diaper Bag</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Placeholder for Image */}
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center shadow-inner">
            <span className="text-gray-500">[Product Image Here]</span>
          </div>

          {/* Product Details */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Compact. Practical. Beautiful.</h3>
            <p className="text-gray-700 mb-6">
              Designed with moms in mind — GoMama Kit combines a foldable baby changing mat,
              easy-access diaper & wipes pouches, and an extra zip pocket for baby essentials
              like oils, creams, and sanitizer. Carry it inside your main diaper bag or on its own.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Foldable & travel-friendly</li>
              <li>Wipes pouch with mesh opening</li>
              <li>Diaper pocket with easy slip access</li>
              <li>Extra zip pocket for baby care items</li>
              <li>Available in plain & Ankara print</li>
            </ul>
            <button className="bg-pink-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-pink-600 transition">
              Pre-Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Theme Options Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Choose Your Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-2xl shadow-md p-6 bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">Minimalist Modern</h3>
            <p className="text-gray-700 mb-4">Clean lines, soft pastel tones, and simple elegance perfect for everyday use.</p>
            <div className="h-32 bg-gradient-to-r from-gray-200 to-white rounded-xl"></div>
          </div>
          <div className="rounded-2xl shadow-md p-6 bg-white border border-gray-200">
            <h3 className="text-xl font-semibold mb-3">Ankara Bold</h3>
            <p className="text-gray-700 mb-4">Bright, vibrant African-inspired prints that make a strong fashion statement.</p>
            <div className="h-32 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About GoMama Kit</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          GoMama Kit was created for moms, by moms. We know the struggle of juggling baby essentials
          while on the go. That’s why we designed a compact, stylish, and functional diaper solution
          that makes motherhood just a little easier.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6 text-gray-700">Have questions or want to stock GoMama Kit? Reach out to us!</p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-pink-600 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} GoMama Kit. All rights reserved.</p>
      </footer>
    </div>
  );
}
