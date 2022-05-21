/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UploadImageInput = {
  contentType: string,
  fileName: string,
};

export type AttachmentPayload = {
  __typename: "AttachmentPayload",
  putUrl?: string | null,
  getUrl?: string | null,
};

export type UploadImageMutationVariables = {
  input?: UploadImageInput | null,
};

export type UploadImageMutation = {
  uploadImage?:  {
    __typename: "AttachmentPayload",
    putUrl?: string | null,
    getUrl?: string | null,
  } | null,
};

export type HelloQuery = {
  hello?: string | null,
};
