
import Image from "next/image";


export default function Home() {
  const products = [
    { id: 1, Image: "/offer2.jpg", title: "Women's Fashion" },
    { id: 2, Image: "/offer4.jpg", title: "Men's Fashion" },
    { id: 3, Image: "/offer.jpg", title: "Casual Wear" },
    { id: 4, Image: "/offer5.jpg", title: "Elegant Styles" },
    { id: 5, Image: "/banner.jpg", title: "Summer Collection" },
    { id: 6, Image: "/banner.jpg", title: "Trendy Outfits" },
   
  ];

  return (
    <>
      <div className="banner">
      <Image
        src="/banner2.jpg"
        alt="Fashion Banner"
        width={1920}
        height={800}
        className="banner-image"
        priority
      />
    </div>

      <section className="offer-section">
        <div className="offer-heading">
          <p className="offer-subtitle">YOUR STYLE, YOUR STORY</p>
          <h2>Fashion Finds You’ll Love</h2>
          <p className="offer-description">
            Refresh your wardrobe with timeless styles, elegant accessories,
            and everyday essentials made for you.
          </p>
          
        </div>

        <div className="products">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-image">
                <Image
                  src={p.Image}
                  alt={p.title}
                  width={300}
                  height={220}
                />
                <span className="discount-badge">SPECIAL OFFER</span>
              </div>

              <div className="product-info">
                <h3>{p.title}</h3>
                <p>Discover your signature style</p>
                <button className="shop-button">Explore Now →</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
