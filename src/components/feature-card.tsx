import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}     color="transparent" shadow={false}>
      <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}     className="grid place-items-start px-0">
        <div className="mb-3 grid place-content-center rounded-lg text-left text-blue-gray-900">
          <Icon className="h-6 w-6" />
        </div>
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}     variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}     className="text-gray-500 font-normal">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}


export default FeatureCard;
