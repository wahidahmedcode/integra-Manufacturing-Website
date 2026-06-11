import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { MOCK_BLOGS } from "../data";
import { Clock, User, Tag, ArrowRight } from "lucide-react";

export const Blog: React.FC = () => {
  const { language } = useApp();
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Green Forging", "Material Science", "Metrology", "Aerospace"];

  const filteredBlogs = MOCK_BLOGS.filter((b) => {
    return selectedTag === "All" || b.tags.includes(selectedTag);
  });

  return (
    <div id="view-blog" className="transition-colors duration-250 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* head */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-2 font-mono">Academic Insights</h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Knowledge Base & Case Studies</p>
          <p className="text-sm text-zinc-550 dark:text-zinc-400 mt-4 leading-relaxed font-normal">
            Read comprehensive structural testing profiles, ESG carbon abatement white papers, and metrology calibration summaries directly from our engineers.
          </p>
        </div>

        {/* Tags filter chips */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-12">
          {tags.map((tg) => (
            <button
              key={tg}
              onClick={() => setSelectedTag(tg)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-colors cursor-pointer ${
                selectedTag === tg
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-white text-zinc-700 hover:bg-zinc-150 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-808 dark:text-zinc-350 dark:hover:bg-zinc-830"
              }`}
            >
              {tg}
            </button>
          ))}
        </div>

        {/* list of publications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 px-2 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-white bg-indigo-600 rounded">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-505 mb-3">
                    <span className="flex items-center gap-1.1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-zinc-100 mb-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4 text-[10px] font-mono text-zinc-400">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-955 border border-zinc-150 dark:border-zinc-850">
                        #{t.replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>

                  {/* Author detail info */}
                  <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-70s dark:text-zinc-300">{post.author}</span>
                    <button
                      onClick={() => {
                        alert(`[WHITE PAPER ACCESS]
Title: ${post.title}
Filing standard: Integra Academic Archive Document #102-M

Access to full metallurgical logs requires a cleared enterprise portal login key. Please register an account or access our ERP Client Center.`);
                      }}
                      className="text-indigo-505 font-bold uppercase text-[10px] tracking-widest hover:text-indigo-600 cursor-pointer flex items-center gap-1 transition-colors"
                    >
                      <span>Read Paper</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
