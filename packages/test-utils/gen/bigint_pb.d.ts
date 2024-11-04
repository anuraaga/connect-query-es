// Copyright 2021-2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.2.1 with parameter "target=dts+js"
// @generated from file bigint.proto (syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file bigint.proto.
 */
export declare const file_bigint: GenFile;

/**
 * @generated from message CountRequest
 */
export declare type CountRequest = Message<"CountRequest"> & {
  /**
   * @generated from field: int64 add = 1;
   */
  add: bigint;
};

/**
 * Describes the message CountRequest.
 * Use `create(CountRequestSchema)` to create a new message.
 */
export declare const CountRequestSchema: GenMessage<CountRequest>;

/**
 * @generated from message CountResponse
 */
export declare type CountResponse = Message<"CountResponse"> & {
  /**
   * @generated from field: int64 count = 1;
   */
  count: bigint;
};

/**
 * Describes the message CountResponse.
 * Use `create(CountResponseSchema)` to create a new message.
 */
export declare const CountResponseSchema: GenMessage<CountResponse>;

/**
 * @generated from service BigIntService
 */
export declare const BigIntService: GenService<{
  /**
   * @generated from rpc BigIntService.Count
   */
  count: {
    methodKind: "unary";
    input: typeof CountRequestSchema;
    output: typeof CountResponseSchema;
  },
  /**
   * @generated from rpc BigIntService.GetCount
   */
  getCount: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof CountResponseSchema;
  },
}>;

