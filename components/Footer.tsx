import Text from "@/components/Text";

export default function Footer() {
  return (
    <footer className="w-full py-10 text-center border-t border-slatebg-800 mt-20">
      <Text>© {new Date().getFullYear()} TradeConnect AI. All rights reserved.</Text>
    </footer>
  );
}
