import ClickModel from "./click.model.js";

export const getClickCounts = async () => {
  let click = await ClickModel.findOne();

  if (!click) {
    click = await ClickModel.create({
      freeClicks: 0,
      paidClicks: 0,
    });
  }

  return click;
};

export const increaseFreeClick = async () => {
  let click = await ClickModel.findOne();

  if (!click) {
    click = await ClickModel.create({
      freeClicks: 0,
      paidClicks: 0,
    });
  }

  click.freeClicks += 1;

  await click.save();

  return click;
};
