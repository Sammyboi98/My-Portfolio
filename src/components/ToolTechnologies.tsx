const ToolsTechnologies = () => {
  const toolCategories = [
    {
      category: "Design & Prototyping Tools",
      tools: [
        { name: "Figma", icon: "🎨", color: "bg-purple-500" },
        { name: "Sketch", icon: "💎", color: "bg-yellow-500" },
        { name: "Bluebeam", icon: "😊", color: "bg-blue-400" },
        { name: "Creello", icon: "📊", color: "bg-green-500" },
        { name: "Principle", icon: "🔴", color: "bg-red-500" },
        { name: "Lottiefiles", icon: "⚡", color: "bg-emerald-500" },
        { name: "Phase", icon: "🌙", color: "bg-gray-800" },
      ],
    },
    {
      category: "Brainstorming Tools",
      tools: [
        { name: "Figjam", icon: "🎨", color: "bg-purple-500" },
        { name: "Miro", icon: "💡", color: "bg-yellow-400" },
        { name: "Notion", icon: "📝", color: "bg-gray-700" },
        { name: "MS Office", icon: "📊", color: "bg-orange-500" },
      ],
    },
    {
      category: "Collaboration Tools",
      tools: [
        { name: "Figma Dev", icon: "🎨", color: "bg-purple-500" },
        { name: "Zeplin", icon: "⭐", color: "bg-yellow-500" },
        { name: "Trello", icon: "📋", color: "bg-blue-500" },
        { name: "Clickup", icon: "🔺", color: "bg-pink-500" },
      ],
    },
    {
      category: "Development Tools",
      tools: [
        { name: "Html 5", icon: "🟧", color: "bg-orange-600" },
        { name: "Css3", icon: "🔷", color: "bg-blue-600" },
        { name: "OnHook", icon: "⚫", color: "bg-gray-800" },
        { name: "Framer", icon: "🔵", color: "bg-blue-500" },
        { name: "Webflow", icon: "🌊", color: "bg-cyan-500" },
        { name: "Flutterflow", icon: "💜", color: "bg-purple-600" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-left">
          Tools & Technologies
        </h1>

        <div className="space-y-12">
          {toolCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h2 className="text-xl font-semibold text-white/90 text-left">
                {category.category}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="group cursor-pointer transform hover:scale-110 transition-all duration-300 ease-out"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div
                        className={`w-16 h-16 ${tool.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-white/20 transition-all duration-300`}
                      >
                        <span className="text-2xl filter drop-shadow-sm">
                          {tool.icon}
                        </span>
                      </div>
                      <span className="text-white/90 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsTechnologies;
