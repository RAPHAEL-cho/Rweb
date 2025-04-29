import PHONE1 from './images/8.jpg'
import PHONE2 from './images/12.jpg'
import PHONE3 from './images/13.jpg'
import PHONE4 from './images/14.jpg'
import PHONE5 from './images/15.jpg'
import SHIRT1 from './images/male vest.jpg'
import SHIRT2 from './images/OIF.jpg'
import SHIRT3 from './images/17.jpg'
import SHIRT4 from './images/18.jpg'
import SHIRT5 from './images/19.jpg'
import SHOE1 from './images/10.jpg'
import SHOE2 from './images/7.jpg'



const all_products =[
    {
        id:6,
        name:'Samsung',
        category:'PHONE',
        img:PHONE1,
        old_price:300.00,
        new_price:211.00,
        description:'The Galaxy S20 Pro is Samsung’s flagship device that redefines mobile performance. It boasts a professional-grade camera system, including 8K video, ultra-wide lens, and up to 100x zoom. Its 120Hz display delivers silky-smooth visuals, perfect for gaming and video. With 5G connectivity, a high-capacity battery, and top-tier processors, this phone is future-ready. Whether streaming, shooting, or scrolling, the S20 Pro provides a seamless experience in a sleek, premium package.'
    },

    {
        id:7,
        name:'Iphone 16',
        category:'PHONE',
        img:PHONE2,
        old_price:1850.00,
        new_price:1500.00,
        description:'The iPhone 16 is Apple’s latest smartphone, featuring a stunning Super Retina XDR display and an advanced A16 Bionic chip for lightning-fast performance. With a dual-camera system that excels in low light and a new cinematic mode for video, it captures stunning photos and videos. The device supports 5G connectivity, ensuring fast downloads and streaming. Its sleek design, durable materials, and iOS integration provide a seamless user experience. The iPhone 16 is perfect for tech enthusiasts and everyday users alike, combining innovation with style.'
    },

    
    {
        id:8,
        name:'Iphone',
        category:'PHONE',
        img:PHONE3,
        old_price:350.00,
        new_price:270.00,
        description:'The iPhone 14 is Apple’s iconic smartphone reimagined with powerful enhancements. It features a super retina XDR display, enhanced battery life, and an advanced dual-camera system with night mode and cinematic video. Built with the latest A-series chip, it ensures ultra-fast performance and energy efficiency. Seamless iOS integration, robust security features, and a sleek, durable design make the iPhone 14 a leading choice for both tech lovers and everyday users. It’s innovation, refined.'
    },

    {
        id:9,
        name:'Tecno',
        category:'PHONE',
        img:PHONE4,
        old_price:230.00,
        new_price:170.00,
        description:'The Tecno Spark 7 is an affordable smartphone designed for everyday use. It features a 6.5-inch HD+ display, providing vibrant visuals for streaming and browsing. Powered by a MediaTek Helio A25 processor, it ensures smooth performance for daily tasks. The dual-camera setup captures decent photos, while the 5000mAh battery offers extended usage without frequent charging. With its sleek design and user-friendly interface, the Spark 7 is an excellent choice for budget-conscious users seeking reliability and functionality in a smartphone.'
    },

    {
        id:10,
        name:'Tecno',
        category:'PHONE',
        img:PHONE5,
        old_price:280.00,
        new_price:190.00,
        description:'The Tecno Pova 2 is a powerful smartphone designed for gaming and multitasking. It features a large 6.9-inch FHD+ display, providing immersive visuals for gaming and streaming. Powered by a MediaTek Helio G85 processor, it ensures smooth performance even during demanding tasks. The quad-camera system captures stunning photos, while the massive 7000mAh battery guarantees extended usage without frequent charging. With its sleek design and advanced features, the Pova 2 is perfect for users seeking performance and style in one device.'
    },

    {
        id:11,
        name:'Male Vest',
        category:'SHIRT',
        img:SHIRT1,
        old_price:45,
        new_price:28,
        description:'This round-necked latex shirt combines comfort and contemporary style in a minimalistic silhouette. The smooth latex finish adds a subtle shine that elevates everyday wear into something special. It hugs the body in a flattering way while remaining breathable and easy to care for. Great for layering or wearing solo, this shirt fits effortlessly into a casual or urban-chic wardrobe. Its versatility and modern appeal make it ideal for those who enjoy a sleek, polished look'
        
    },

    {
        id:12,
        name:'Black Shirt',
        category:'SHIRT',
        img:SHIRT2,
        old_price:29,
        new_price:11,
        description:'The Black Shirt is a versatile wardrobe staple that combines elegance and simplicity. Made from high-quality fabric, it features a classic collar, button-down front, and short sleeves, making it suitable for both casual and semi-formal occasions. The sleek black color adds a touch of sophistication, allowing for easy pairing with jeans, trousers, or shorts. Its breathable material ensures comfort throughout the day, while the timeless design makes it a must-have for any fashion-conscious individual. Perfect for work, outings, or relaxed weekends.'
    },

    {
        id:13,
        name:'White Polo',
        category:'SHIRT',
        img:SHIRT3,
        old_price:11,
        new_price:5,
        description:"The White Polo Shirt is a timeless classic designed for comfort and effortless style. With its soft cotton fabric, ribbed collar, and short sleeves, it’s perfect for both semi-formal and casual occasions. The minimal design allows for easy pairing with jeans, chinos, or shorts. This polo shirt is lightweight, breathable, and durable—ideal for warm weather or layering under jackets. Whether for school, sports, or a smart-casual office look, it remains a wardrobe essential for all ages."
    },

    {
        id:14,
        name:'Jean Shirt',
        category:'SHIRT',
        img:SHIRT4,
        old_price:13,
        new_price:7,
        description:'The Jean Shirt is a versatile and stylish addition to any wardrobe. Made from durable denim fabric, it features a classic button-down design with a pointed collar and chest pockets. The timeless blue hue pairs well with various outfits, making it suitable for both casual and semi-formal occasions. Its breathable material ensures comfort, while the sturdy construction guarantees longevity. Whether worn alone or layered over a t-shirt, the Jean Shirt adds a touch of rugged charm to any look, making it a must-have for fashion enthusiasts.'
    },

    {
        id:15,
        name:'Colored Shirt',
        category:'SHIRT',
        img:SHIRT5,
        old_price:11,
        new_price:4,
        description:'This multi-colored shirt blends a spectrum of bright hues into a fashion-forward garment suitable for both casual outings and expressive events. Crafted from breathable fabric, it offers both comfort and a bold aesthetic. The dynamic color palette makes it a standout choice for individuals seeking to add personality and fun to their wardrobe. Whether paired with jeans or shorts, this shirt brings joyful vibes and a trendy flair. Its stylish cut and durability ensure it remains a wardrobe staple for seasons to come'
    },

    {
        id:16,
        name:'Nike',
        category:'SHOE',
        img:SHOE1,
        old_price:40,
        new_price:25,
        description:'The Nike Air Max 270 is a stylish and comfortable sneaker designed for both performance and everyday wear. Featuring a large Air unit in the heel, it provides exceptional cushioning and support, making it ideal for running or casual outings. The breathable mesh upper ensures ventilation, while the sleek design and vibrant color options make it a fashionable choice. With its lightweight construction and durable materials, the Air Max 270 combines style and functionality, making it a must-have for sneaker enthusiasts and athletes alike.'
    },

    {
        id:17,
        name:'Nike',
        category:'SHOE',
        img:SHOE2,
        old_price:48,
        new_price:30,
        description:'The Nike Air Force 1 is an iconic sneaker that blends classic style with modern comfort. Originally designed for basketball, it features a durable leather upper, providing both support and a timeless look. The cushioned midsole ensures all-day comfort, while the rubber outsole offers excellent traction. Available in various colorways, the Air Force 1 is versatile enough to pair with any outfit, making it a staple in streetwear culture. Its rich history and enduring popularity solidify its status as a must-have sneaker for fashion enthusiasts and athletes alike.'
    },
]

export default all_products