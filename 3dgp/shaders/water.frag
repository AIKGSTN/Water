#version 330

// Input Variables (received from Vertex Shader)
in vec4 color;
in vec4 position;
in vec3 normal;
in vec2 texCoord0;

in vec3 texCoordCubeMap; 
uniform samplerCube textureCubeMap; 
uniform sampler2D texture0;
uniform float reflectionPower; 


// Output Variable (sent down through the Pipeline)
out vec4 outColor;

uniform vec3 waterColor = vec3(0.2f, 0.22f, 0.02f);
uniform vec3 skyColor;

in float reflFactor;

void main(void) 
{
	outColor = color;

	vec4 col1 = vec4(waterColor, 0.2);
	vec4 col2 = vec4(skyColor, 1.0);

	outColor = mix(outColor * texture(texture0, texCoord0.st),texture(textureCubeMap, texCoordCubeMap), reflectionPower);


	outColor = mix(col1, col2, reflFactor);

}
