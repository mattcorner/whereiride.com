import Link from "next/link";

export default function PostNavigation({ next, previous }) {
  return (
    <div className="flex flex-col mb-4 md:mb-6 md:flex-row md:flex-wrap">
      <div className="flex-1 mb-2 md:mb-0">
        {previous && (
          <Link href={`/blog/${previous.slug}`}>
            <a className="flex flex-row w-full justify-start group">
              <div className="flex items-center">
                <LeftChevron className="inline-block" />
                <div className="ml-2">
                  <div className="text-left text-gray-600">Previous post</div>
                  <span className="text-sm text-gray-700 border-b-2 border-brand group-hover:text-brand md:text-lg">
                    {previous.title}
                  </span>
                </div>
              </div>
            </a>
          </Link>
        )}
      </div>
      <div className="flex-1 mb-2 md:mb-0">
        {next && (
          <Link href={`/blog/${next.slug}`}>
            <a className="flex flex-row w-full justify-end group">
              <div className="flex items-center">
                <div className="mr-2">
                  <div className="text-right text-gray-600">Next post</div>
                  <span className="text-right text-sm text-gray-700 border-b-2 border-brand group-hover:text-brand md:text-lg">
                    {next.title}
                  </span>
                </div>
                <RightChevron className="inline-block" />
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

function LeftChevron(props) {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#999"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
}

function RightChevron(props) {
  return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#999"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}
