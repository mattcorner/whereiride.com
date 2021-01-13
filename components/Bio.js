import Link from "next/link";

export default function Bio() {
  return (
    <div className="flex mb-8 md:mb-16">
      <img
        src="./images/profile.jpg"
        className="hidden w-32 h-32 mr-4 rounded-full md:block"
      />
      <div className="flex-1 leading-relaxed md:text-lg">
        <p className="text-2xl">Hi, I'm Matt</p>
        <p>
          I'm a cyclist based in Scotland sharing my journey, experiences &
          routes with you. You can find me on{" "}
          <a
            href="https://twitter.com/cornercodes"
            className="border-twitter border-b-2 hover:text-twitter"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://www.strava.com/athletes/30778675"
            className="border-strava border-b-2 hover:text-strava"
          >
            Strava
          </a>{" "}
          &{" "}
          <a
            href="https://www.komoot.com/user/1005655042771"
            className="border-komoot border-b-2 hover:text-komoot"
          >
            Komoot
          </a>
          .
          {/**
          You can also check out{" "}
          <Link href="/">
            <a className="border-brand border-b-2 hover:text-brand">my setup</a>
          </Link>{" "}
          or where I want{" "}
          <Link href="/">
            <a className="border-brand border-b-2 hover:text-brand">to ride</a>
          </Link>
          .
          **/}
        </p>
      </div>
    </div>
  );
}
