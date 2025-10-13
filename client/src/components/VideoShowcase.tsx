import { Card } from "@/components/ui/card";
import { Play, Pause } from "lucide-react";
import { useState } from "react";
import aiRobotImage from "@assets/stock_images/artificial_intellige_2f43adbb.jpg";
import mlProcessImage from "@assets/stock_images/artificial_intellige_e23877b5.jpg";
import dataVizImage from "@assets/stock_images/futuristic_data_visu_aa309bed.jpg";

const videos = [
  {
    title: "AI in Action",
    description: "See how our AI models process and analyze complex data in real-time",
    thumbnail: aiRobotImage,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "2:45",
  },
  {
    title: "Self-Governing Systems",
    description: "Discover autonomous systems that adapt and optimize without human intervention",
    thumbnail: mlProcessImage,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "3:12",
  },
  {
    title: "Data Visualization",
    description: "Transform complex data into actionable insights with our visualization tools",
    thumbnail: dataVizImage,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "1:58",
  },
];

export default function VideoShowcase() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const togglePlay = (index: number) => {
    setPlayingIndex(playingIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 px-8 relative bg-card/30" data-testid="section-video-showcase">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold" data-testid="text-video-title">
            Experience <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">Innovation</span> in Motion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-video-description">
            Watch our AI solutions transform data into intelligent action
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="overflow-hidden border-primary/10 hover-elevate active-elevate-2 transition-all cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`video-card-${index}`}
            >
              <div className="relative aspect-video overflow-hidden">
                {playingIndex === index ? (
                  <video
                    className="w-full h-full object-cover"
                    src={video.videoUrl}
                    autoPlay
                    controls
                    data-testid={`video-player-${index}`}
                  />
                ) : (
                  <>
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-testid={`video-thumbnail-${index}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    
                    {/* Play Button Overlay */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center"
                      onClick={() => togglePlay(index)}
                      data-testid={`play-button-${index}`}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transform transition-transform hover:scale-110">
                        {playingIndex === index ? (
                          <Pause className="w-6 h-6 text-primary-foreground ml-0.5" />
                        ) : (
                          <Play className="w-6 h-6 text-primary-foreground ml-1" />
                        )}
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-xs font-medium">
                      {video.duration}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold" data-testid={`video-title-${index}`}>
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`video-description-${index}`}>
                  {video.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}