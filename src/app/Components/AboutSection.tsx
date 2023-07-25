import React from "react";

const AboutSection = () => {
  return (
    <section id="about">
      <div>
        <h1>About Me</h1>
        <div>
          <div>
            <h1 className="">Get to know me!</h1>
            <p>
              Hi, my name is Emad and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Manchester, UK.
            </p>
            <br />
            <p>
              I graduated from a Full-Stack JavaScript bootcamp in 2023 and have been continuing to develop myself ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to running a tech blog on TikTok,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div>
            <h1>My Skills</h1>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
