/* eslint-disable react/prop-types */
export default function ProjectIframe({ project }) {
    return (
      <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg h-full">
        <iframe 
          src={project.iframeUrl}
          title={project.title}
          className="w-full h-full min-h-[300px] border-0"
        />
      </div>
    );
  }