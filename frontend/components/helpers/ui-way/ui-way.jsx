import iconBg from "./img/icon-bg.svg";
import WayItem from "./ui/way-item";
import WayItems from "./ui/way-items";

const UiWay = ({steps}) => {
    return (
        <WayItems>
            {steps.map((step, i) => <WayItem key={i}
                image={step.image} 
                iconBg={iconBg}
                text={step.text}
                numStep={i+1} />
            )}
        </WayItems>
    )
}

export default UiWay;