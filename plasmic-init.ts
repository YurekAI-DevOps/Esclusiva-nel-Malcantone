import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "57d6hz8HZaGTK6eAJYRUEL";
export const projectApiToken = "hI87HVSQOvOYGVrG5X4oNcmWnHFM6pmG8OF9y5uLCLOesgZ2i0ttTHSdinj2QYQyAZCviQ1kk3hmooVqJvw";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
