'use client'

import Link from "next/link";
import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

const topics = [
  { id: 1, des: "study" },
  { id: 2, des: "HTML" },
  { id: 3, des: "CSS" },
  { id: 4, des: "Backend" },
  { id: 5, des: "Full-stack" },
  { id: 6, des: "Javascript" },
  { id: 7, des: "React" },
  { id: 8, des: "Next.js" },
  { id: 9, des: "Develop" },
  { id: 10, des: "life" }
];

export default function EditBlog() {
    const [selected, setSelected] = useState([topics[0]])

    return (
        <main className="mx-auto w-full max-w-5xl px-8 py-16 sm:px-12">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                <legend className="fieldset-legend">Blog Content</legend>

                <label className="label">Title</label>
                <input type="text" className="input w-full" placeholder="My awesome page" />

                <label className="label">Content</label>
                <textarea
                className="textarea textarea-bordered w-full h-40"
                placeholder="Write your blog here..."
                ></textarea>

                <Listbox value={selected} onChange={setSelected} multiple>
                    <label className="label">Topic</label>
                    <div className="relative mt-2">
                        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6">
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <span className="block truncate">
                                {selected.length > 0
                                    ? selected.map((topic) => topic.des).join(", ")
                                    : "Select topics"}
                            </span>
                        </span>
                        <ChevronUpDownIcon
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                        </ListboxButton>

                        <ListboxOptions
                        transition
                        className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                        >
                        {topics.map((topic) => (
                            <ListboxOption
                            key={topic.id}
                            value={topic}
                            className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                            >
                            <span className="block truncate">{topic.des}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                                <CheckIcon aria-hidden="true" className="size-5" />
                            </span>
                            </ListboxOption>
                        ))}
                        </ListboxOptions>
                    </div>
                </Listbox>
            </fieldset>

                 <Link href="/blog" className="mt-8 inline-flex rounded-md bg-black px-4 py-2 text-sm text-white">
                     Back to Blog
            </Link>
        </main>
    )
}