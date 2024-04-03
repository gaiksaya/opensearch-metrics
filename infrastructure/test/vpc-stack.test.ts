// import * as cdk from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';
// import * as Infrastructure from '../lib/infrastructure-stack';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/infrastructure-stack.ts
import {App} from "aws-cdk-lib";
import {Template} from "aws-cdk-lib/assertions";
import {VpcStack} from "../lib/stacks/vpc";

test('VPC Stack Test', () => {
    const app = new App();
    const vpcStack = new VpcStack(app, 'Test-OpenSearchHealth-VPC', {});
    const vpcStackTemplate = Template.fromStack(vpcStack);
    vpcStackTemplate.resourceCountIs('AWS::EC2::VPC', 1);
    vpcStackTemplate.resourceCountIs('AWS::EC2::Subnet', 4);
});
