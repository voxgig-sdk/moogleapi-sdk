<?php
declare(strict_types=1);

// Moogleapi SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

MoogleapiUtility::setRegistrar(function (MoogleapiUtility $u): void {
    $u->clean = [MoogleapiClean::class, 'call'];
    $u->done = [MoogleapiDone::class, 'call'];
    $u->make_error = [MoogleapiMakeError::class, 'call'];
    $u->feature_add = [MoogleapiFeatureAdd::class, 'call'];
    $u->feature_hook = [MoogleapiFeatureHook::class, 'call'];
    $u->feature_init = [MoogleapiFeatureInit::class, 'call'];
    $u->fetcher = [MoogleapiFetcher::class, 'call'];
    $u->make_fetch_def = [MoogleapiMakeFetchDef::class, 'call'];
    $u->make_context = [MoogleapiMakeContext::class, 'call'];
    $u->make_options = [MoogleapiMakeOptions::class, 'call'];
    $u->make_request = [MoogleapiMakeRequest::class, 'call'];
    $u->make_response = [MoogleapiMakeResponse::class, 'call'];
    $u->make_result = [MoogleapiMakeResult::class, 'call'];
    $u->make_point = [MoogleapiMakePoint::class, 'call'];
    $u->make_spec = [MoogleapiMakeSpec::class, 'call'];
    $u->make_url = [MoogleapiMakeUrl::class, 'call'];
    $u->param = [MoogleapiParam::class, 'call'];
    $u->prepare_auth = [MoogleapiPrepareAuth::class, 'call'];
    $u->prepare_body = [MoogleapiPrepareBody::class, 'call'];
    $u->prepare_headers = [MoogleapiPrepareHeaders::class, 'call'];
    $u->prepare_method = [MoogleapiPrepareMethod::class, 'call'];
    $u->prepare_params = [MoogleapiPrepareParams::class, 'call'];
    $u->prepare_path = [MoogleapiPreparePath::class, 'call'];
    $u->prepare_query = [MoogleapiPrepareQuery::class, 'call'];
    $u->result_basic = [MoogleapiResultBasic::class, 'call'];
    $u->result_body = [MoogleapiResultBody::class, 'call'];
    $u->result_headers = [MoogleapiResultHeaders::class, 'call'];
    $u->transform_request = [MoogleapiTransformRequest::class, 'call'];
    $u->transform_response = [MoogleapiTransformResponse::class, 'call'];
});
