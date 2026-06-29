import NexusApparelPreview from "./NexusApparelPreview";

export const projectPreviewComponents = {
  "nexus-apparel": NexusApparelPreview,
};

export function getProjectPreviewComponent(previewKey) {
  return previewKey ? projectPreviewComponents[previewKey] : null;
}
