const Contact: React.FC = () => {
  return (
    <main id="main-content" className="py-20">
      <div className=" mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">
              let's connect?
            </h1>
            <p className="text-lg text-neutral-gray">
              hi hi, i'm always up for reading what you've penned. email me or
              just poke me on linkedin (that's where i hang out most).
              catch you later :)
            </p>
          </header>

          <div className="mt-12 text-center">
            {/* <p className="text-neutral-gray mb-4">
              Prefer to reach out directly?
            </p> */}
            <a
              href="mailto:sripali.deb.official@gmail.com"
              className="text-warm-brown hover:underline font-medium"
            >
              sripali.deb.official@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
