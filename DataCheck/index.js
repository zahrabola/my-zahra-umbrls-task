import Image from "next/image";
import setup from "../public/setup.png";
import cart from "../public/cart.png";
import coupons from "../public/coupons.png";
import organize from "../public/organize.png";
import customer from "../public/customer.png";
import bar from "../public/bar.png"



export const integrations = [
    {
        title: "Quick setup process",
        desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        icon: <Image
        src={setup}
        width={29}
        height={29}
        alt="setup"
        className="float-left"
      />

    }, {
        title: "Create custom orders",
        desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        icon: <Image
        src={cart}
        width={29}
        height={29}
        alt="cart"
        className="float-left"/>
    }, {
        title: "Multiple coupons",
        desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        icon: <Image
        src={coupons}
        width={29}
        height={29}
        alt="coupons"
        className="float-left"/>

    },
    {
        title: "Organize your campaigns",
        desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        icon: <Image
        src={organize}
        width={29}
        height={29}
        alt="organize"
        className="float-left"
      />

    }, {
        title: "Manage customers",
        desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        icon: <Image
        src={customer}
        width={29}
        height={29}
        alt="customer"
        className="float-left"/>
    }, {
        title: "Track progress fast",
        desc: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        icon: <Image
        src={bar}
        width={29}
        height={29}
        alt="bar"
        className="float-left"/>

    },
]