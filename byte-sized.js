export default function bytes(input) {
  if (typeof input === "string") {
    const units = {
      B: 0,
      KB: 1,
      MB: 2,
      GB: 3,
      TB: 4,
      PB: 5,
    };
    const match = input.match(/^(\d+|\d+\.\d+|\.\d+)(\s*)([BKMGTP]B)$/i);
    if (!match) throw new Error("Invalid file size input format");
    const sizeInBytes = BigInt(
      Math.round(
        parseFloat(match[1]) * Math.pow(1024, units[match[3].toUpperCase()])
      )
    );
    return `${sizeInBytes.toString()} bytes`;
  } else if (typeof input === "number") {
    const sizes = ["bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = input ? Math.floor(Math.log(input) / Math.log(1024)) : 0;
    const size = (BigInt(input) / BigInt(Math.pow(1024, i))).toString();
    return `${size} ${sizes[i]}`;
  } else {
    throw new Error("Invalid input");
  }
}
