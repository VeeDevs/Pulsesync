
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Review {
  name: string;
  content: string;
  rating: number;
  date: string;
}

export const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });

  const reviews: Review[] = [
    {
      name: "John Smith",
      content: "Excellent service! The smart lighting installation has transformed our home.",
      rating: 5,
      date: "2024-03-10",
    },
    {
      name: "Sarah Johnson",
      content: "Very professional team. The security system gives us peace of mind.",
      rating: 5,
      date: "2024-03-09",
    },
    {
      name: "Michael Brown",
      content: "Great experience with the voice control setup. Works perfectly!",
      rating: 4,
      date: "2024-03-08",
    },
  ];

  // Sort reviews by date, most recent first
  const sortedReviews = [...reviews].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    toast.success("Thank you for your review!");
    setFormData({ name: "", content: "" });
    setRating(0);
  };

  return (
    <div className="space-y-12">
      <div className="glass-card p-8 rounded-xl max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Leave a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 cursor-pointer ${
                    star <= rating ? "fill-accent text-accent" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Textarea
            placeholder="Your Review"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            required
          />
          <Button type="submit" className="w-full">
            Submit Review
          </Button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedReviews.map((review, index) => (
          <div key={index} className="glass-card p-6 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-foreground/60">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <p className="mb-4 text-foreground/80">{review.content}</p>
            <p className="font-semibold">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
