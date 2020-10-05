import React, { FC, useEffect } from 'react'

function selects(obj: any, keys: any[]) {
    return keys.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {})
}

export function flatTreeData(input: any[]) {
    try {
        let output = []

        const getChildren = (obj: any) => {

            if (obj && obj.children && obj.children.length > 0) {
                const { children } = obj;

                children.map((item: any) => {
                    output.push({ ...item })
                    getChildren(item);
                    return item;
                })
            }
        }

        output.push(input);
        getChildren(input);

        output.map((item: any) => {
            delete item.children;
            return item;
        })

        return output;
    } catch (error) {
        return []
    }
}

export const TreeView: FC<{ affiliate: any[] }> = (props) => {
    useEffect(() => {
        // @ts-ignore
        const OrgChart: any = window ? window.OrgChart : undefined;
 
        if (OrgChart) {
            const { affiliate } = props;

            const data = affiliate.map(((item: any) => {
                let rank = item.level;
                let img = `/assets/images/rank/_0.png`;
                const id = item.investorId;
 
                return ({
                    id,
                    pid: item.presenterId,
                    address: item.address,
                    rank,
                    img,
                })
            }))

            new OrgChart(document.getElementById("tree"), {
                template: 'diva',
                enableSearch: true,
                nodeBinding: {
                    field_0: "address",
                    field_2: "rank",
                    img_0: "img"
                },
                nodes: data,
            });
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="TreeView">
            <div id="tree" />
        </div>
    )
}