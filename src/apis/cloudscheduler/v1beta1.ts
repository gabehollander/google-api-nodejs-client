/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {GaxiosPromise} from 'gaxios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {APIRequestContext, BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudscheduler_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  let context: APIRequestContext;

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be
     * any arbitrary string assigned to a user, but should not exceed 40
     * characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Cloud Scheduler API
   *
   * Creates and manages jobs run on a regular recurring schedule.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudscheduler = google.cloudscheduler('v1beta1');
   *
   * @namespace cloudscheduler
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Cloudscheduler
   */
  export class Cloudscheduler {
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      context = {_options: options || {}, google};

      this.projects = new Resource$Projects();
    }
  }

  /**
   * App Engine target. The job will be pushed to a job handler by means of an
   * HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job
   * is acknowledged by means of an HTTP response code in the range [200 - 299].
   * Error 503 is considered an App Engine system error instead of an
   * application error. Requests returning error 503 will be retried regardless
   * of retry configuration and not counted against retry counts. Any other
   * response code, or a failure to receive a response before the deadline,
   * constitutes a failed attempt.
   */
  export interface Schema$AppEngineHttpTarget {
    /**
     * App Engine Routing setting for the job.
     */
    appEngineRouting?: Schema$AppEngineRouting;
    /**
     * Body.  HTTP request body. A request body is allowed only if the HTTP
     * method is POST or PUT. It will result in invalid argument error to set a
     * body on a job with an incompatible HttpMethod.
     */
    body?: string;
    /**
     * HTTP request headers.  This map contains the header field names and
     * values. Headers can be set when the job is created.  Cloud Scheduler sets
     * some headers to default values:  * `User-Agent`: By default, this header
     * is   `&quot;AppEngine-Google; (+http://code.google.com/appengine)&quot;`.
     * This header can be modified, but Cloud Scheduler will append
     * `&quot;AppEngine-Google; (+http://code.google.com/appengine)&quot;` to
     * the   modified `User-Agent`. * `X-CloudScheduler`: This header will be
     * set to true.  If the job has an body, Cloud Scheduler sets the following
     * headers:  * `Content-Type`: By default, the `Content-Type` header is set
     * to   `&quot;application/octet-stream&quot;`. The default can be
     * overridden by explictly   setting `Content-Type` to a particular media
     * type when the job is   created.   For example, `Content-Type` can be set
     * to `&quot;application/json&quot;`. * `Content-Length`: This is computed
     * by Cloud Scheduler. This value is   output only. It cannot be changed.
     * The headers below are output only. They cannot be set or overridden:  *
     * `X-Google-*`: For Google internal use only. * `X-AppEngine-*`: For Google
     * internal use only.  In addition, some App Engine headers, which contain
     * job-specific information, are also be sent to the job handler.
     */
    headers?: {[key: string]: string;};
    /**
     * The HTTP method to use for the request. PATCH and OPTIONS are not
     * permitted.
     */
    httpMethod?: string;
    /**
     * The relative URI.  The relative URL must begin with &quot;/&quot; and
     * must be a valid HTTP relative URL. It can contain a path, query string
     * arguments, and `#` fragments. If the relative URL is empty, then the root
     * path &quot;/&quot; will be used. No spaces are allowed, and the maximum
     * length allowed is 2083 characters.
     */
    relativeUri?: string;
  }
  /**
   * App Engine Routing.  For more information about services, versions, and
   * instances see [An Overview of App
   * Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
   * [Microservices Architecture on Google App
   * Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
   * [App Engine Standard request
   * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
   * and [App Engine Flex request
   * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
   */
  export interface Schema$AppEngineRouting {
    /**
     * Output only. The host that the job is sent to.  For more information
     * about how App Engine requests are routed, see
     * [here](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).
     * The host is constructed as:   * `host =
     * [application_domain_name]`&lt;/br&gt;   `| [service] + &#39;.&#39; +
     * [application_domain_name]`&lt;/br&gt;   `| [version] + &#39;.&#39; +
     * [application_domain_name]`&lt;/br&gt;   `| [version_dot_service]+
     * &#39;.&#39; + [application_domain_name]`&lt;/br&gt;   `| [instance] +
     * &#39;.&#39; + [application_domain_name]`&lt;/br&gt;   `|
     * [instance_dot_service] + &#39;.&#39; +
     * [application_domain_name]`&lt;/br&gt;   `| [instance_dot_version] +
     * &#39;.&#39; + [application_domain_name]`&lt;/br&gt;   `|
     * [instance_dot_version_dot_service] + &#39;.&#39; +
     * [application_domain_name]`  * `application_domain_name` = The domain name
     * of the app, for   example &lt;app-id&gt;.appspot.com, which is associated
     * with the   job&#39;s project ID.  * `service =` service  * `version =`
     * version  * `version_dot_service =`   version `+ &#39;.&#39; +`   service
     * * `instance =` instance  * `instance_dot_service =`   instance `+
     * &#39;.&#39; +`   service  * `instance_dot_version =`   instance `+
     * &#39;.&#39; +`   version  * `instance_dot_version_dot_service =` instance
     * `+ &#39;.&#39; +`   version `+ &#39;.&#39; +`   service   If service is
     * empty, then the job will be sent to the service which is the default
     * service when the job is attempted.  If version is empty, then the job
     * will be sent to the version which is the default version when the job is
     * attempted.  If instance is empty, then the job will be sent to an
     * instance which is available when the job is attempted.  If service,
     * version, or instance is invalid, then the job will be sent to the default
     * version of the default service when the job is attempted.
     */
    host?: string;
    /**
     * App instance.  By default, the job is sent to an instance which is
     * available when the job is attempted.  Requests can only be sent to a
     * specific instance if [manual scaling is used in App Engine
     * Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
     * App Engine Flex does not support instances. For more information, see
     * [App Engine Standard request
     * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
     * and [App Engine Flex request
     * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
     */
    instance?: string;
    /**
     * App service.  By default, the job is sent to the service which is the
     * default service when the job is attempted.
     */
    service?: string;
    /**
     * App version.  By default, the job is sent to the version which is the
     * default version when the job is attempted.
     */
    version?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Http target. The job will be pushed to the job handler by means of an HTTP
   * request via an http_method such as HTTP POST, HTTP GET, etc. The job is
   * acknowledged by means of an HTTP response code in the range [200 - 299]. A
   * failure to receive a response constitutes a failed execution. For a
   * redirected request, the response returned by the redirected request is
   * considered.
   */
  export interface Schema$HttpTarget {
    /**
     * HTTP request body. A request body is allowed only if the HTTP method is
     * POST, PUT, or PATCH. It is an error to set body on a job with an
     * incompatible HttpMethod.
     */
    body?: string;
    /**
     * The user can specify HTTP request headers to send with the job&#39;s HTTP
     * request. This map contains the header field names and values. Repeated
     * headers are not supported, but a header value can contain commas. These
     * headers represent a subset of the headers that will accompany the
     * job&#39;s HTTP request. Some HTTP request headers will be ignored or
     * replaced. A partial list of headers that will be ignored or replaced is
     * below: - Host: This will be computed by Cloud Scheduler and derived from
     * uri. * `Content-Length`: This will be computed by Cloud Scheduler. *
     * `User-Agent`: This will be set to `&quot;Google-Cloud-Scheduler&quot;`. *
     * `X-Google-*`: Google internal use only. * `X-AppEngine-*`: Google
     * internal use only.  The total size of headers must be less than 80KB.
     */
    headers?: {[key: string]: string;};
    /**
     * Which HTTP method to use for the request.
     */
    httpMethod?: string;
    /**
     * Required.  The full URI path that the request will be sent to. This
     * string must begin with either &quot;http://&quot; or
     * &quot;https://&quot;. Some examples of valid values for uri are:
     * `http://acme.com` and `https://acme.com/sales:8080`. Cloud Scheduler will
     * encode some characters for safety and compatibility. The maximum allowed
     * URL length is 2083 characters after encoding.
     */
    uri?: string;
  }
  /**
   * Configuration for a job. The maximum allowed size for a job is 100KB.
   */
  export interface Schema$Job {
    /**
     * App Engine HTTP target.
     */
    appEngineHttpTarget?: Schema$AppEngineHttpTarget;
    /**
     * A human-readable description for the job. This string must not contain
     * more than 500 characters.
     */
    description?: string;
    /**
     * HTTP target.
     */
    httpTarget?: Schema$HttpTarget;
    /**
     * Output only. The time the last job attempt started.
     */
    lastAttemptTime?: string;
    /**
     * The job name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.  * `PROJECT_ID`
     * can contain letters ([A-Za-z]), numbers ([0-9]),    hyphens (-), colons
     * (:), or periods (.).    For more information, see    [Identifying
     * projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
     * * `LOCATION_ID` is the canonical ID for the job&#39;s location.    The
     * list of available locations can be obtained by calling    ListLocations.
     * For more information, see https://cloud.google.com/about/locations/. *
     * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]),    hyphens
     * (-), or underscores (_). The maximum length is 500 characters.
     */
    name?: string;
    /**
     * Pub/Sub target.
     */
    pubsubTarget?: Schema$PubsubTarget;
    /**
     * Settings that determine the retry behavior.
     */
    retryConfig?: Schema$RetryConfig;
    /**
     * Required.  Describes the schedule on which the job will be executed.  As
     * a general rule, execution `n + 1` of a job will not begin until execution
     * `n` has finished. Cloud Scheduler will never allow two simultaneously
     * outstanding executions. For example, this implies that if the `n+1`th
     * execution is scheduled to run at 16:00 but the `n`th execution takes
     * until 16:15, the `n+1`th execution will not start until `16:15`. A
     * scheduled start time will be delayed if the previous execution has not
     * ended when its scheduled time occurs.  If retry_count &gt; 0 and a job
     * attempt fails, the job will be tried a total of retry_count times, with
     * exponential backoff, until the next scheduled start time.  The schedule
     * can be either of the following types:  *
     * [Crontab](http://en.wikipedia.org/wiki/Cron#Overview) * English-like
     * [schedule](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules)
     */
    schedule?: string;
    /**
     * Output only. The next time the job is scheduled. Note that this may be a
     * retry of a previously failed attempt or the next execution time according
     * to the schedule.
     */
    scheduleTime?: string;
    /**
     * Output only. State of the job.
     */
    state?: string;
    /**
     * Output only. The response from the target for the last attempted
     * execution.
     */
    status?: Schema$Status;
    /**
     * Specifies the time zone to be used in interpreting schedule. The value of
     * this field must be a time zone name from the [tz
     * database](http://en.wikipedia.org/wiki/Tz_database).  Note that some time
     * zones include a provision for daylight savings time. The rules for
     * daylight saving time are determined by the chosen tz. For UTC use the
     * string &quot;utc&quot;. If a time zone is not specified, the default will
     * be in UTC (also known as GMT).
     */
    timeZone?: string;
    /**
     * Output only. The creation time of the job.
     */
    userUpdateTime?: string;
  }
  /**
   * Response message for listing jobs using ListJobs.
   */
  export interface Schema$ListJobsResponse {
    /**
     * The list of jobs.
     */
    jobs?: Schema$Job[];
    /**
     * A token to retrieve next page of results. Pass this value in the
     * page_token field in the subsequent call to ListJobs to retrieve the next
     * page of results. If this is empty it indicates that there are no more
     * results through which to paginate.  The page token is valid for only 2
     * hours.
     */
    nextPageToken?: string;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For
     * example, &quot;Tokyo&quot;.
     */
    displayName?: string;
    /**
     * Cross-service attributes for the location. For example
     * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string;};
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string;
    /**
     * Service-specific metadata. For example the available capacity at the
     * given location.
     */
    metadata?: {[key: string]: any;};
    /**
     * Resource name for the location, which may vary between implementations.
     * For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string;
  }
  /**
   * Request message for PauseJob.
   */
  export interface Schema$PauseJobRequest {}
  /**
   * A message that is published by publishers and consumed by subscribers. The
   * message must contain either a non-empty data field or at least one
   * attribute. Note that client libraries represent this object differently
   * depending on the language. See the corresponding &lt;a
   * href=&quot;https://cloud.google.com/pubsub/docs/reference/libraries&quot;&gt;client
   * library documentation&lt;/a&gt; for more information. See &lt;a
   * href=&quot;https://cloud.google.com/pubsub/quotas&quot;&gt;Quotas and
   * limits&lt;/a&gt; for more information about message limits.
   */
  export interface Schema$PubsubMessage {
    /**
     * Optional attributes for this message.
     */
    attributes?: {[key: string]: string;};
    /**
     * The message data field. If this field is empty, the message must contain
     * at least one attribute.
     */
    data?: string;
    /**
     * ID of this message, assigned by the server when the message is published.
     * Guaranteed to be unique within the topic. This value may be read by a
     * subscriber that receives a `PubsubMessage` via a `Pull` call or a push
     * delivery. It must not be populated by the publisher in a `Publish` call.
     */
    messageId?: string;
    /**
     * The time at which the message was published, populated by the server when
     * it receives the `Publish` call. It must not be populated by the publisher
     * in a `Publish` call.
     */
    publishTime?: string;
  }
  /**
   * Pub/Sub target. The job will be delivered by publishing a message to the
   * given Pub/Sub topic.
   */
  export interface Schema$PubsubTarget {
    /**
     * Attributes for PubsubMessage.  Pubsub message must contain either
     * non-empty data, or at least one attribute.
     */
    attributes?: {[key: string]: string;};
    /**
     * The message payload for PubsubMessage.  Pubsub message must contain
     * either non-empty data, or at least one attribute.
     */
    data?: string;
    /**
     * Required.  The name of the Cloud Pub/Sub topic to which messages will be
     * published when a job is delivered. The topic name must be in the same
     * format as required by PubSub&#39;s
     * [PublishRequest.name](https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#publishrequest),
     * for example `projects/PROJECT_ID/topics/TOPIC_ID`.  The topic must be in
     * the same project as the Cloud Scheduler job.
     */
    topicName?: string;
  }
  /**
   * Request message for ResumeJob.
   */
  export interface Schema$ResumeJobRequest {}
  /**
   * Settings that determine the retry behavior.  By default, if a job does not
   * complete successfully (meaning that an acknowledgement is not received from
   * the handler, then it will be retried with exponential backoff according to
   * the settings in RetryConfig.
   */
  export interface Schema$RetryConfig {
    /**
     * The maximum amount of time to wait before retrying a job after it fails.
     * The default value of this field is 1 hour.
     */
    maxBackoffDuration?: string;
    /**
     * The time between retries will double `max_doublings` times.  A job&#39;s
     * retry interval starts at min_backoff_duration, then doubles
     * `max_doublings` times, then increases linearly, and finally retries
     * retries at intervals of max_backoff_duration up to retry_count times. For
     * example, if min_backoff_duration is 10s, max_backoff_duration is 300s,
     * and `max_doublings` is 3, then the a job will first be retried in 10s.
     * The retry interval will double three times, and then increase linearly by
     * 2^3 * 10s.  Finally, the job will retry at intervals of
     * max_backoff_duration until the job has been attempted retry_count times.
     * Thus, the requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s,
     * 300s, ....  The default value of this field is 5.
     */
    maxDoublings?: number;
    /**
     * The time limit for retrying a failed job, measured from time when an
     * execution was first attempted. If specified with retry_count, the job
     * will be retried until both limits are reached.  The default value for
     * max_retry_duration is zero, which means retry duration is unlimited.
     */
    maxRetryDuration?: string;
    /**
     * The minimum amount of time to wait before retrying a job after it fails.
     * The default value of this field is 5 seconds.
     */
    minBackoffDuration?: string;
    /**
     * The number of attempts that the system will make to run a job using the
     * exponential backoff procedure described by max_doublings.  The default
     * value of retry_count is zero.  If retry_count is zero, a job attempt will
     * *not* be retried if it fails. Instead the Cloud Scheduler system will
     * wait for the next scheduled execution time.  If retry_count is set to a
     * non-zero number then Cloud Scheduler will retry failed attempts, using
     * exponential backoff, retry_count times, or until the next scheduled
     * execution time, whichever comes first.  Values greater than 5 and
     * negative values are not allowed.
     */
    retryCount?: number;
  }
  /**
   * Request message for forcing a job to run now using RunJob.
   */
  export interface Schema$RunJobRequest {}
  /**
   * The `Status` type defines a logical error model that is suitable for
   * different programming environments, including REST APIs and RPC APIs. It is
   * used by [gRPC](https://github.com/grpc). The error model is designed to be:
   * - Simple to use and understand for most users - Flexible enough to meet
   * unexpected needs  # Overview  The `Status` message contains three pieces of
   * data: error code, error message, and error details. The error code should
   * be an enum value of google.rpc.Code, but it may accept additional error
   * codes if needed.  The error message should be a developer-facing English
   * message that helps developers *understand* and *resolve* the error. If a
   * localized user-facing error message is needed, put the localized message in
   * the error details or localize it in the client. The optional error details
   * may contain arbitrary information about the error. There is a predefined
   * set of error detail types in the package `google.rpc` that can be used for
   * common error conditions.  # Language mapping  The `Status` message is the
   * logical representation of the error model, but it is not necessarily the
   * actual wire format. When the `Status` message is exposed in different
   * client libraries and different wire protocols, it can be mapped
   * differently. For example, it will likely be mapped to some exceptions in
   * Java, but more likely mapped to some error codes in C.  # Other uses  The
   * error model and the `Status` message can be used in a variety of
   * environments, either with or without APIs, to provide a consistent
   * developer experience across different environments.  Example uses of this
   * error model include:  - Partial errors. If a service needs to return
   * partial errors to the client,     it may embed the `Status` in the normal
   * response to indicate the partial     errors.  - Workflow errors. A typical
   * workflow has multiple steps. Each step may     have a `Status` message for
   * error reporting.  - Batch operations. If a client uses batch request and
   * batch response, the     `Status` message should be used directly inside
   * batch response, one for     each error sub-response.  - Asynchronous
   * operations. If an API call embeds asynchronous operation     results in its
   * response, the status of those operations should be     represented directly
   * using the `Status` message.  - Logging. If some API errors are stored in
   * logs, the message `Status` could     be used directly after any stripping
   * needed for security/privacy reasons.
   */
  export interface Schema$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set
     * of message types for APIs to use.
     */
    details?: Array<{[key: string]: any;}>;
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }


  export class Resource$Projects {
    locations: Resource$Projects$Locations;
    constructor() {
      this.locations = new Resource$Projects$Locations();
    }
  }


  export class Resource$Projects$Locations {
    jobs: Resource$Projects$Locations$Jobs;
    constructor() {
      this.jobs = new Resource$Projects$Locations$Jobs();
    }


    /**
     * cloudscheduler.projects.locations.get
     * @desc Gets information about a location.
     * @alias cloudscheduler.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Location>;
    get(params: Params$Resource$Projects$Locations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(params: Params$Resource$Projects$Locations$Get,
        callback: BodyResponseCallback<Schema$Location>): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Get|
        BodyResponseCallback<Schema$Location>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Location>,
        callback?: BodyResponseCallback<Schema$Location>):
        void|GaxiosPromise<Schema$Location> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }


    /**
     * cloudscheduler.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias cloudscheduler.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$List,
        options?: MethodOptions): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
        params: Params$Resource$Projects$Locations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$List,
        callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$List|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLocationsResponse>,
        callback?: BodyResponseCallback<Schema$ListLocationsResponse>):
        void|GaxiosPromise<Schema$ListLocationsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}/locations')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
     */
    name?: string;
    /**
     * The standard list page size.
     */
    pageSize?: number;
    /**
     * The standard list page token.
     */
    pageToken?: string;
  }

  export class Resource$Projects$Locations$Jobs {
    constructor() {}


    /**
     * cloudscheduler.projects.locations.jobs.create
     * @desc Creates a job.
     * @alias cloudscheduler.projects.locations.jobs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required.  The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     * @param {().Job} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Locations$Jobs$Create,
        options?: MethodOptions): GaxiosPromise<Schema$Job>;
    create(
        params: Params$Resource$Projects$Locations$Jobs$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback: BodyResponseCallback<Schema$Job>): void;
    create(
        params: Params$Resource$Projects$Locations$Jobs$Create,
        callback: BodyResponseCallback<Schema$Job>): void;
    create(callback: BodyResponseCallback<Schema$Job>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Locations$Jobs$Create|
        BodyResponseCallback<Schema$Job>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback?: BodyResponseCallback<Schema$Job>):
        void|GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Jobs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/jobs')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }


    /**
     * cloudscheduler.projects.locations.jobs.delete
     * @desc Deletes a job.
     * @alias cloudscheduler.projects.locations.jobs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Locations$Jobs$Delete,
        options?: MethodOptions): GaxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Locations$Jobs$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Locations$Jobs$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Locations$Jobs$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Jobs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * cloudscheduler.projects.locations.jobs.get
     * @desc Gets a job.
     * @alias cloudscheduler.projects.locations.jobs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Locations$Jobs$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Job>;
    get(params: Params$Resource$Projects$Locations$Jobs$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback: BodyResponseCallback<Schema$Job>): void;
    get(params: Params$Resource$Projects$Locations$Jobs$Get,
        callback: BodyResponseCallback<Schema$Job>): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Locations$Jobs$Get|
        BodyResponseCallback<Schema$Job>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback?: BodyResponseCallback<Schema$Job>):
        void|GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }


    /**
     * cloudscheduler.projects.locations.jobs.list
     * @desc Lists jobs.
     * @alias cloudscheduler.projects.locations.jobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Requested page size.  The maximum page size is 500. If unspecified, the page size will be the maximum. Fewer jobs than requested might be returned, even if more jobs exist; use next_page_token to determine if more jobs exist.
     * @param {string=} params.pageToken A token identifying a page of results the server will return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListJobs. It is an error to switch the value of filter or order_by while iterating through pages.
     * @param {string} params.parent Required.  The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Locations$Jobs$List,
        options?: MethodOptions): GaxiosPromise<Schema$ListJobsResponse>;
    list(
        params: Params$Resource$Projects$Locations$Jobs$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListJobsResponse>,
        callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
        params: Params$Resource$Projects$Locations$Jobs$List,
        callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListJobsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Locations$Jobs$List|
        BodyResponseCallback<Schema$ListJobsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListJobsResponse>,
        callback?: BodyResponseCallback<Schema$ListJobsResponse>):
        void|GaxiosPromise<Schema$ListJobsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}/jobs')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$ListJobsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListJobsResponse>(parameters);
      }
    }


    /**
     * cloudscheduler.projects.locations.jobs.patch
     * @desc Updates a job.  If successful, the updated Job is returned. If the
     * job does not exist, `NOT_FOUND` is returned.  If UpdateJob does not
     * successfully return, it is possible for the job to be in an
     * Job.State.UPDATE_FAILED state. A job in this state may not be executed.
     * If this happens, retry the UpdateJob request until a successful response
     * is received.
     * @alias cloudscheduler.projects.locations.jobs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.  * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),    hyphens (-), colons (:), or periods (.).    For more information, see    [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the job's location.    The list of available locations can be obtained by calling    ListLocations.    For more information, see https://cloud.google.com/about/locations/. * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]),    hyphens (-), or underscores (_). The maximum length is 500 characters.
     * @param {string=} params.updateMask A  mask used to specify which fields of the job are being updated.
     * @param {().Job} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Locations$Jobs$Patch,
        options?: MethodOptions): GaxiosPromise<Schema$Job>;
    patch(
        params: Params$Resource$Projects$Locations$Jobs$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback: BodyResponseCallback<Schema$Job>): void;
    patch(
        params: Params$Resource$Projects$Locations$Jobs$Patch,
        callback: BodyResponseCallback<Schema$Job>): void;
    patch(callback: BodyResponseCallback<Schema$Job>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Locations$Jobs$Patch|
        BodyResponseCallback<Schema$Job>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback?: BodyResponseCallback<Schema$Job>):
        void|GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Jobs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }


    /**
     * cloudscheduler.projects.locations.jobs.pause
     * @desc Pauses a job.  If a job is paused then the system will stop
     * executing the job until it is re-enabled via ResumeJob. The state of the
     * job is stored in state; if paused it will be set to Job.State.PAUSED. A
     * job must be in Job.State.ENABLED to be paused.
     * @alias cloudscheduler.projects.locations.jobs.pause
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     * @param {().PauseJobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    pause(
        params?: Params$Resource$Projects$Locations$Jobs$Pause,
        options?: MethodOptions): GaxiosPromise<Schema$Job>;
    pause(
        params: Params$Resource$Projects$Locations$Jobs$Pause,
        options: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback: BodyResponseCallback<Schema$Job>): void;
    pause(
        params: Params$Resource$Projects$Locations$Jobs$Pause,
        callback: BodyResponseCallback<Schema$Job>): void;
    pause(callback: BodyResponseCallback<Schema$Job>): void;
    pause(
        paramsOrCallback?: Params$Resource$Projects$Locations$Jobs$Pause|
        BodyResponseCallback<Schema$Job>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback?: BodyResponseCallback<Schema$Job>):
        void|GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Jobs$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}:pause')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }


    /**
     * cloudscheduler.projects.locations.jobs.resume
     * @desc Resume a job.  This method reenables a job after it has been
     * Job.State.PAUSED. The state of a job is stored in Job.state; after
     * calling this method it will be set to Job.State.ENABLED. A job must be in
     * Job.State.PAUSED to be resumed.
     * @alias cloudscheduler.projects.locations.jobs.resume
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     * @param {().ResumeJobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resume(
        params?: Params$Resource$Projects$Locations$Jobs$Resume,
        options?: MethodOptions): GaxiosPromise<Schema$Job>;
    resume(
        params: Params$Resource$Projects$Locations$Jobs$Resume,
        options: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback: BodyResponseCallback<Schema$Job>): void;
    resume(
        params: Params$Resource$Projects$Locations$Jobs$Resume,
        callback: BodyResponseCallback<Schema$Job>): void;
    resume(callback: BodyResponseCallback<Schema$Job>): void;
    resume(
        paramsOrCallback?: Params$Resource$Projects$Locations$Jobs$Resume|
        BodyResponseCallback<Schema$Job>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback?: BodyResponseCallback<Schema$Job>):
        void|GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Jobs$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}:resume')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }


    /**
     * cloudscheduler.projects.locations.jobs.run
     * @desc Forces a job to run now.  When this method is called, Cloud
     * Scheduler will dispatch the job, even if the job is already running.
     * @alias cloudscheduler.projects.locations.jobs.run
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required.  The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     * @param {().RunJobRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    run(params?: Params$Resource$Projects$Locations$Jobs$Run,
        options?: MethodOptions): GaxiosPromise<Schema$Job>;
    run(params: Params$Resource$Projects$Locations$Jobs$Run,
        options: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback: BodyResponseCallback<Schema$Job>): void;
    run(params: Params$Resource$Projects$Locations$Jobs$Run,
        callback: BodyResponseCallback<Schema$Job>): void;
    run(callback: BodyResponseCallback<Schema$Job>): void;
    run(paramsOrCallback?: Params$Resource$Projects$Locations$Jobs$Run|
        BodyResponseCallback<Schema$Job>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Job>,
        callback?: BodyResponseCallback<Schema$Job>):
        void|GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Locations$Jobs$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Run;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://cloudscheduler.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}:run')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Jobs$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The location name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The job name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The job name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Requested page size.  The maximum page size is 500. If unspecified, the
     * page size will be the maximum. Fewer jobs than requested might be
     * returned, even if more jobs exist; use next_page_token to determine if
     * more jobs exist.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server will return. To request
     * the first page results, page_token must be empty. To request the next
     * page of results, page_token must be the value of next_page_token returned
     * from the previous call to ListJobs. It is an error to switch the value of
     * filter or order_by while iterating through pages.
     */
    pageToken?: string;
    /**
     * Required.  The location name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Patch extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The job name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.  * `PROJECT_ID`
     * can contain letters ([A-Za-z]), numbers ([0-9]),    hyphens (-), colons
     * (:), or periods (.).    For more information, see    [Identifying
     * projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
     * * `LOCATION_ID` is the canonical ID for the job's location.    The list
     * of available locations can be obtained by calling    ListLocations. For
     * more information, see https://cloud.google.com/about/locations/. *
     * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]),    hyphens
     * (-), or underscores (_). The maximum length is 500 characters.
     */
    name?: string;
    /**
     * A  mask used to specify which fields of the job are being updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Pause extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The job name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PauseJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Resume extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The job name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeJobRequest;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Run extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required.  The job name. For example:
     * `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunJobRequest;
  }
}
