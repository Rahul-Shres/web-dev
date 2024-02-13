import React from 'react'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

const CustomTab = ({ title, content }) => {
  return (
    <div className="flex w-full flex-col">
    {/* <Tabs aria-label="Dynamic tabs" items={tabs}>
      {(item) => (
        <Tab key={item.id} title={item.label}>
          <Card>
            <CardBody>
              {item.content}
            </CardBody>
          </Card>  
        </Tab>
      )}
    </Tabs> */}
     {courseData.map((course, index) => (
        <CustomTab key={index} title={course.title} content={course.content} />
      ))}
  </div> 
  )
}

export default CustomTab