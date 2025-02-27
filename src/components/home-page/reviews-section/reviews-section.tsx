import React, { useState, useEffect } from "react";
import ReviewCard from "./reviews-card";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const ALL_REVIEWS_QUERY = `*[_type == "review"] {
 fullName,
  Role,
  company,
  review,
  "imageUrl": image.asset->url,
}`;

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await client.fetch<SanityDocument[]>(
          ALL_REVIEWS_QUERY,
          {},
          options
        );

        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // Keen slider setup
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 45,
    },
    mode: "snap",
    breakpoints: {
      "(max-width: 1200px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    created(s) {
      s.moveToIdx(1, true);
    },
    animationEnded(s) {
      setTimeout(() => {
        s.next();
      }, 5000);
    },
  });

  return (
    <section className="my-14 md:my-16 lg:my-20 xl:my-32">
      <h1 className="font-bold text-center text-3xl lg:text-5xl">
        See what <span className="text-pink-100">others</span> are saying
      </h1>

      <div ref={sliderRef} className="keen-slider mt-10 md:mt-16">
        {reviews.map((review, index) => {
          const reviewImageUrl = review.imageUrl
            ? urlFor(review.imageUrl)?.width(60).height(60).url()
            : null;

          return (
            <div
              key={index}
              className="keen-slider__slide grid md:flex justify-center snap-center"
            >
              <ReviewCard
                name={review.fullName}
                role={review.Role}
                company={review.company}
                text={review.review}
                imageSrc={reviewImageUrl || "./placeholder.png"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReviewsSection;
