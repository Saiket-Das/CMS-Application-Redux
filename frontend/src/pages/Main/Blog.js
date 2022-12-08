import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mb-4 md:mb-0 w-full mx-auto relative px-12">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
            massa et auctor.
          </h2>
          <p
            href="#"
            className="py-2 text-indigo-700 inline-flex items-center justify-center mb-2"
          >
            Cryptocurrency
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          className="w-2/5 h-72 object-cover lg:rounded"
          //   style="height:28em;"
          alt=""
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <p className="pb-6">
            Advantage old had otherwise sincerity dependent additions. It in
            adapted natural hastily is justice. Six draw you him full not mean
            evil. Prepare garrets it expense windows shewing do an. She
            projection advantages resolution son indulgence. Part sure on no
            long life am at ever. In songs above he as drawn to. Gay was
            outlived peculiar rendered led six.
          </p>

          <p className="pb-6">
            Difficulty on insensible reasonable in. From as went he they.
            Preference themselves me as thoroughly partiality considered on in
            estimating. Middletons acceptance discovered projecting so is so or.
            In or attachment inquietude remarkably comparison at an. Is
            surrounded prosperous stimulated am me discretion expression. But
            truth being state can she china widow. Occasional preference fat
            remarkably now projecting uncommonly dissimilar. Sentiments
            projection particular companions interested do at my delightful.
            Listening newspaper in advantage frankness to concluded unwilling.
          </p>

          <p className="pb-6">
            Adieus except say barton put feebly favour him. Entreaties
            unpleasant sufficient few pianoforte discovered uncommonly ask.
            Morning cousins amongst in mr weather do neither. Warmth object
            matter course active law spring six. Pursuit showing tedious unknown
            winding see had man add. And park eyes too more him. Simple excuse
            active had son wholly coming number add. Though all excuse ladies
            rather regard assure yet. If feelings so prospect no as raptures
            quitting.
          </p>
        </div>

        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
                alt=""
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm">
                  Ahan Bryan
                </p>
                <p className="font-semibold text-gray-600 text-xs">Blogger </p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
              Mike writes about technology Yourself required no at thoughts
              delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Follow
              <i className="bx bx-user-plus ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
