import { Reveal } from "@/view/Reveal";
import { workProcess } from "@/model/data";

export function WorkProcess() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">05</span> / 12<span className="rule" />
          Work Process
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">From Your Idea to a Finished Metal Project</h2>
        </Reveal>
        <div className="process-track">
          {workProcess.map((step) => (
            <Reveal as="div" className="process-step" key={step.idx}>
              <div className="idx">{step.idx}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
