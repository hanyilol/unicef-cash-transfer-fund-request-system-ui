export interface FundRequest {
  readonly link: string; // link is also the unique id of an article
  readonly title: string;
  readonly requestId: string;
  readonly publishTime: Date;
}

export const REQUESTS: FundRequest[] = [
  {
    link: "https://medium.com/@hanyi.du/how-to-get-a-block-number-by-timestamp-fefde4c69162",
    title: "Pending",
    requestId: "e12fef2343f3m",
    publishTime: new Date("2022-09-18T21:00:00"),
  },
  {
    link: "",
    title: "Approved",
    requestId: "fwgf224ggggwgw",
    publishTime: new Date("2022-10-31T21:00:00"),
  },
  {
    link: "",
    title: "Fund Released",
    requestId: "3t36ugfjnto75dsft",
    publishTime: new Date("2022-11-15T21:00:00"),
  },
  {
    link: "",
    title: "Rejected",
    requestId: "asaf35heh34h3",
    publishTime: new Date("2022-12-15T21:00:00"),
  },
];
