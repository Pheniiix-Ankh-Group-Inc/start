import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    name: 'Sophie T.',
    quote: 'Brice helped us map our MVP with clarity—saved us weeks of confusion. We now have a solid roadmap.'
  },
  {
    name: 'Marc D.',
    quote: 'We gained so much clarity. His technical insights avoided costly mistakes for our launch.'
  },
  {
    name: 'Claire B.',
    quote: 'A game changer for our startup. Brice translated our business needs into tech steps we understood.'
  }
];

function ClientReviewCarousel() {
  return (
    <section className="py-15 px-4">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-10 text-[var(--color-bg-alt)]">What Clients Say</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[var(--color-bg-alt)] text-[var(--color-text-dark)] p-8 rounded-xl shadow-md max-w-xl mx-auto">
                <p className="italic mb-4">“{review.quote}”</p>
                <p className="font-semibold">— {review.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ClientReviewCarousel;