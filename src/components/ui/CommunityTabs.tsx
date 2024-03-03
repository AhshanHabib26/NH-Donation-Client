import { Tabs } from "@mantine/core";
import myImage from "../../assets/images/myImg.jpg";

export default function CommunityTabs() {
  return (
    <div>
      <Tabs defaultValue="first">
        <Tabs.List grow justify="space-between">
          <Tabs.Tab color="teal" value="first">
            All Time
          </Tabs.Tab>
          <Tabs.Tab color="orange" value="second">
            Month
          </Tabs.Tab>
          <Tabs.Tab color="blue" value="third">
            Week
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="first" pt="xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-[35px] h-[35px] border border-slate-300 object-cover shadow rounded-full"
                src={myImage}
                alt=""
              />
              <h1 className="text-lg ml-3 text-gray-700">Ahshan Habib</h1>
            </div>
            <div>
              <p>100</p>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-[35px] h-[35px] border border-slate-300 object-cover shadow rounded-full"
                src={myImage}
                alt=""
              />
              <h1 className="text-lg ml-3 text-gray-700">Ahshan Habib</h1>
            </div>
            <div>
              <p>100</p>
            </div>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="third" pt="xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-[35px] h-[35px] border border-slate-300 object-cover shadow rounded-full"
                src={myImage}
                alt=""
              />
              <h1 className="text-lg ml-3 text-gray-700">Ahshan Habib</h1>
            </div>
            <div>
              <p>100</p>
            </div>
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
