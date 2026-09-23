export function getGenderName(gender) {
  switch (gender) {
    case 0:
      return "Trái Đất";

    case 1:
      return "Namếc";

    case 2:
      return "Xayda";

    default:
      return "Không xác định";
  }
}
export function getPlayerAvatar(player) {
  if (!player) {
    return "/imgs/avatar/3.png";
  }
  return `/imgs/avatar/${player.gender}.png`;
}
