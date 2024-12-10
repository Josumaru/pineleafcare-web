export function getInitials(name: string): string {
  if (!name) return "";

  const nameParts = name.trim().split(" ");
  if (nameParts.length === 1) {
    return nameParts[0][0]?.toUpperCase() || "";
  } else {
    return (
      nameParts[0][0]?.toUpperCase() + nameParts[1][0]?.toUpperCase() || ""
    );
  }
}
